FROM node:18-alpine as development

WORKDIR /var/www/html

ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package*.json ./ 

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

#CMD ["npm", "run", "prod"]