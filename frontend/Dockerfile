FROM node:22

WORKDIR /react-docker/

COPY ./package*.json /react-docker
RUN npm install

COPY ./public*/ /react-docker/public
COPY ./src*/ /react-docker/src

CMD ["npm", "start"]
