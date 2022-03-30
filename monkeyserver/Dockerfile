FROM node:14
WORKDIR /monkeyserver
COPY package.json .
RUN npm install
COPY . .
CMD npm start