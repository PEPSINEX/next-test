FROM node:22-bookworm-slim

WORKDIR /app

COPY .npmrc package.json package-lock.json ./
RUN npm ci

ENV NODE_ENV=development
