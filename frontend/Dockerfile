FROM node:lts-alpine AS builder

ENV NODE_ENV=production

WORKDIR /frontend

COPY package.json .

RUN npm install
RUN npm install -g vite

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html