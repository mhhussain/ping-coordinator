FROM node:latest

WORKDIR /home/node/app

COPY . .

ENV NODE_ENV=production
ENV PORT=5001
ENV MORGAN_FORMAT=tiny

ENTRYPOINT ["npm", "run", "start"]