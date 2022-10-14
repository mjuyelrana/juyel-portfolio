FROM node:16-alpine3.16

WORKDIR /app

RUN npm i -g npm 

COPY package*.json ./ 

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]