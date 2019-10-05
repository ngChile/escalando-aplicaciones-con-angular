FROM node:10-alpine

ARG app_version
ARG environment_name
ENV APP_VERSION=$app_version
ENV ENVIRONMENT_NAME=$environment_name

COPY . .

RUN npm install --save express body-parser

RUN npm version ${APP_VERSION} --no-git-tag-version

CMD node server.js