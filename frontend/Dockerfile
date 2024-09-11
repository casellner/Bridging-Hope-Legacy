FROM node:22

WORKDIR /react-docker/

COPY ./package*.json ./
RUN cat /react-docker/package.json
RUN npm install

COPY ./public*/ ./public
COPY ./src*/ ./src

CMD ["npm", "start"]
