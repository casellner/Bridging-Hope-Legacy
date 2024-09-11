FROM node:22

WORKDIR /react-docker

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]
