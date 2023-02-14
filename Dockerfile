FROM node:19.4.0

WORKDIR usr/src/restapi-nodejs
COPY package.json .
COPY index.js .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002
