FROM node:22

WORKDIR /usr/src/app

COPY . .

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.8.0
RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/* \
    && npm install


EXPOSE 4400

CMD dockerize -timeout 30s -wait tcp://db:3306 && node app.js

# CMD [ "node", "app.js" ]