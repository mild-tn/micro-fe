FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install --network-timeout 100000 --network-concurrency 10000

COPY . .

EXPOSE 8082

CMD ["yarn", "start"]
