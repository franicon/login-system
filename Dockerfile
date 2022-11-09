FROM node:17.0.0-alpine

## install node-prune (https://www.npmjs.com/package/node-prune)
RUN npm install -g node-prune

WORKDIR '/app'

COPY ./package*.json ./

COPY . .

RUN npm run format && npm run build

RUN npm prune --production

RUN node-prune

EXPOSE 40000

CMD node 'dist/mian'



