FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

EXPOSE 8083

CMD ["yarn", "start"]
