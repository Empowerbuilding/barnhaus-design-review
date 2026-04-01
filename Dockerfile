FROM node:20-alpine AS build
WORKDIR /app
COPY package.json ./
COPY client/package.json client/
RUN npm install && cd client && npm install
COPY . .
RUN cd client && npm run build

FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY server/ server/
COPY --from=build /app/client/dist client/dist
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server/index.js"]
