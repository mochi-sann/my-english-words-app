FROM node:14-alpine3.12


WORKDIR /root/app

COPY package.json yarn.lock ./

RUN yarn install

CMD ["yarn dev -p 8000"]
