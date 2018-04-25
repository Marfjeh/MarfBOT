FROM node:carbon
WORKDIR /usr/src/marfbot
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
