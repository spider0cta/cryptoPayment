FROM node:9

ARG COINHIVE_CAPTCHA_SITE_KEY
ARG COINHIVE_NUMBER_HASHES

RUN mkdir -p /usr/src/web
COPY faucet.json /usr/src

WORKDIR /usr/src/web
COPY ./web/. /usr/src/web
RUN npm install
RUN npm run build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./api/package.json /usr/src/app/
RUN npm install

COPY ./api/. /usr/src/app
RUN mkdir -p /usr/src/app/src/static
RUN cp -r /usr/src/web/dist/* /usr/src/app/src/static

EXPOSE 3000

ENV NODE_ENV production
CMD ["npm", "start"]
