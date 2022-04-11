FROM node:14
WORKDIR /monkeyserver
RUN npm install -g nodemon
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev