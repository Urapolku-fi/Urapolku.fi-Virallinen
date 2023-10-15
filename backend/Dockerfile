FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run start:production"]