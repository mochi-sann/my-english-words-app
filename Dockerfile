FROM node:14.15-alpine

WORKDIR /root/app

COPY package.json yarn.lock ./

RUN yarn install

CMD ["yarn dev -p 8000"]
