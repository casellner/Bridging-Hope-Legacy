FROM node:22

WORKDIR /react-docker/

COPY ./public*/ /react-docker/public
COPY ./src*/ /react-docker/src
COPY ./package*.json /react-docker

RUN npm ci

CMD ["npm", "start"]
