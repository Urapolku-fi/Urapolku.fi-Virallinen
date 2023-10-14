FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/backend

COPY package.json .

RUN npm install

COPY . .
EXPOSE 3000

CMD ["sh", "-c", "npm run start:production"]