FROM node:19.4.0

WORKDIR usr/src/app/restapi-nodejs/
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002