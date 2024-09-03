FROM node:22

WORKDIR /usr/src/app

#Install dependencies
COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .

CMD ["node", "app.js"]
