FROM node:17-alpine

WORKDIR /home/node/app
COPY . .

RUN npm ci && npm cache clean --force
RUN npm i
RUN npm run build

ENV NAMESPACE=default

ENTRYPOINT ["node", ".output/server/index.mjs"]