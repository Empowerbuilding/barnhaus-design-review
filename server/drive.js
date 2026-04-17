const { google } = require('googleapis');
const Fuse = require('fuse.js');

let driveClient = null;

function getDrive() {
  if (driveClient) return driveClient;
  const oauth2 = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  oauth2.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  driveClient = google.drive({ version: 'v3', auth: oauth2 });
  return driveClient;
}

async function searchFoldersIn(parentId, projectSlug, isSharedDriveRoot = false) {
  const drive = getDrive();
  const sharedDriveId = process.env.SHARED_DRIVE_ID;
  const params = {
    fields: 'files(id,name)',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
    pageSize: 200,
  };
  if (isSharedDriveRoot) {
    // Searching shared drive root — use corpora=drive, no parent filter
    params.q = `mimeType='application/vnd.google-apps.folder' and trashed=false`;
    params.driveId = sharedDriveId;
    params.corpora = 'drive';
  } else {
    params.q = `'${parentId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`;
    params.driveId = sharedDriveId;
    params.corpora = 'drive';
  }
  const res = await drive.files.list(params);
  const folders = res.data.files || [];
  if (!folders.length) return null;
  const fuse = new Fuse(folders, { keys: ['name'], threshold: 0.4 });
  const results = fuse.search(projectSlug);
  if (results.length > 0) return results[0].item;
  const lower = projectSlug.toLowerCase();
  return folders.find(f => f.name.toLowerCase().includes(lower)) || null;
}

async function findProjectFolder(projectSlug) {
  const plansFolderId = process.env.PLANS_FOLDER_ID;
  const sharedDriveId = process.env.SHARED_DRIVE_ID;
  if (plansFolderId) {
    const result = await searchFoldersIn(plansFolderId, projectSlug, false);
    if (result) return result;
  }
  if (sharedDriveId) {
    // Search shared drive root (all top-level folders)
    const result = await searchFoldersIn(sharedDriveId, projectSlug, true);
    if (result) return result;
  }
  return null;
}

async function findRendersFolder(projectFolderId) {
  const drive = getDrive();
  const res = await drive.files.list({
    q: `'${projectFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and name contains 'render' and trashed=false`,
    fields: 'files(id,name)',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
    driveId: process.env.SHARED_DRIVE_ID,
    corpora: 'drive',
  });
  const folders = res.data.files || [];
  if (folders.length > 0) return folders[0];

  const allFolders = await drive.files.list({
    q: `'${projectFolderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: 'files(id,name)',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
    driveId: process.env.SHARED_DRIVE_ID,
    corpora: 'drive',
  });
  const fuse = new Fuse(allFolders.data.files || [], { keys: ['name'], threshold: 0.4 });
  const results = fuse.search('renders');
  return results.length > 0 ? results[0].item : null;
}

async function listImages(folderId) {
  const drive = getDrive();
  const res = await drive.files.list({
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`,
    fields: 'files(id,name,mimeType,thumbnailLink)',
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
    driveId: process.env.SHARED_DRIVE_ID,
    corpora: 'drive',
    pageSize: 100,
  });
  return res.data.files || [];
}

async function streamImage(fileId, res) {
  const drive = getDrive();
  const meta = await drive.files.get({
    fileId,
    fields: 'mimeType',
    supportsAllDrives: true,
  });
  res.setHeader('Content-Type', meta.data.mimeType);
  res.setHeader('Cache-Control', 'public, max-age=86400');
  const stream = await drive.files.get(
    { fileId, alt: 'media', supportsAllDrives: true },
    { responseType: 'stream' }
  );
  stream.data.pipe(res);
}

async function getImageBase64(fileId) {
  const drive = getDrive();
  const res = await drive.files.get(
    { fileId, alt: 'media', supportsAllDrives: true },
    { responseType: 'arraybuffer' }
  );
  const meta = await drive.files.get({
    fileId,
    fields: 'mimeType',
    supportsAllDrives: true,
  });
  return {
    base64: Buffer.from(res.data).toString('base64'),
    mimeType: meta.data.mimeType,
  };
}

async function getProjectRenders(projectSlug) {
  const projectFolder = await findProjectFolder(projectSlug);
  if (!projectFolder) throw new Error(`Project folder not found for: ${projectSlug}`);

  const rendersFolder = await findRendersFolder(projectFolder.id);
  if (!rendersFolder) throw new Error(`Renders folder not found in: ${projectFolder.name}`);

  // Look for images directly in renders/, OR in subfolders (d1, d2, etc.)
  let images = await listImages(rendersFolder.id);

  if (images.length === 0) {
    const drive = getDrive();
    const subRes = await drive.files.list({
      q: `'${rendersFolder.id}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: 'files(id,name)',
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
      driveId: process.env.SHARED_DRIVE_ID,
      corpora: 'drive',
      orderBy: 'name',
    });
    const subfolders = subRes.data.files || [];
    for (const sub of subfolders) {
      const subImages = await listImages(sub.id);
      images = images.concat(subImages);
    }
  }
  return {
    projectName: projectFolder.name,
    images: images.map(img => ({
      id: img.id,
      name: img.name,
      mimeType: img.mimeType,
      url: `/api/image/${img.id}`,
    })),
  };
}

module.exports = { getProjectRenders, streamImage, getImageBase64 };
