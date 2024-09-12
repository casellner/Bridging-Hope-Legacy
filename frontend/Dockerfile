FROM node:22

WORKDIR /react-docker

RUN pwd
RUN ls
COPY package*.json ./
RUN pwd
RUN ls
RUN npm install
COPY . .

CMD ["npm", "start"]
