FROM node:14.15.2-slim


WORKDIR /root/app

COPY package.json yarn.lock ./

RUN yarn install

CMD ["yarn dev -p 8000"]
