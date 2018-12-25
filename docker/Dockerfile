FROM node:8-alpine

ARG app_version
ENV APP_VERSION=$app_version

COPY . .

RUN npm install --save express body-parser

RUN npm version ${APP_VERSION} --no-git-tag-version

CMD node server.js