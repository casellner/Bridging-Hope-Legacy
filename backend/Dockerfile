FROM node:22

WORKDIR /usr/src/app

#Install dependencies
RUN pwd
RUN ls
COPY package*.json ./
RUN pwd
RUN ls
RUN npm install
RUN ls

#Bundle app source
COPY . .

CMD ["node", "app.js"]
