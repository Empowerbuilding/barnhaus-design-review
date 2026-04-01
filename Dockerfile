FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev
COPY server/ server/
COPY client/dist/ client/dist/
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server/index.js"]
