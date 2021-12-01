FROM node:16

COPY package*.json ./

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]