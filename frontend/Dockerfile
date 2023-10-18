FROM node:lts-alpine AS builder

ENV NODE_ENV=production

WORKDIR /frontend

COPY package.json .

RUN npm install
RUN npm install -g vite

COPY entrypoint.sh .
COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /frontend/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

COPY --from=builder /frontend/dist /usr/share/nginx/html

ENTRYPOINT ["/entrypoint.sh"]