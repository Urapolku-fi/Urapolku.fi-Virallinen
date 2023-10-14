FROM node:lts-alpine AS builder

ENV NODE_ENV=production

WORKDIR /frontend

COPY package.json .

RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /frontend/dist /usr/share/nginx/html