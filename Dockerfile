FROM node:22-slim

WORKDIR /app

RUN npm install

CMD ["npm", "run", "dev"]
