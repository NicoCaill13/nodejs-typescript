FROM node:15.5.0-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY ./package.json .

RUN apk add git
RUN apk add udev ttf-freefont chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser

RUN npm install

# Bundle app source
COPY . .

RUN npm config set unsafe-perm true


RUN apk add -U tzdata
ENV TZ=Europe/Paris
RUN rm -rf /var/cache/apk/*

# Exports
EXPOSE 3000

