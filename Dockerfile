FROM node:22-slim

WORKDIR /app
COPY my-next-app/package*.json ./
RUN npm ci

CMD ["npm", "run", "dev"]
