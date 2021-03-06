FROM nginx:1.17.1-alpine

LABEL maintainer = "danilo.murer@gmail.com"

EXPOSE 80

WORKDIR /usr/share/nginx/html

COPY /dist/closed-weather/ /usr/share/nginx/html
