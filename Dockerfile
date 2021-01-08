FROM node:12.16-alpine3.9

RUN mkdir -p /home/node/library/node_modules && chown -R node:node /home/node/library

WORKDIR /home/node/library

ENV MONGO_DB_CONNECT_STRING mongodb://localhost:27017/BOOKS

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start"]