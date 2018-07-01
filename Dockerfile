FROM ubuntu:17.10
MAINTAINER Russell Hanson "russell.hanson.web@gmail.com"

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -qq update && apt-get install -y nodejs npm

# Ubuntu installs node as nodejs
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

ADD . /mnt/app

RUN cd /mnt/app && npm install --no-optional . && npm run build

EXPOSE 3000

WORKDIR /mnt/app

CMD ["npm", "run", "server"]
