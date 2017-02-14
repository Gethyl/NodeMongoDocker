FROM node:6.7.0

RUN mkdir /webdocker
ADD . /webdocker
WORKDIR /webdocker

RUN npm install

CMD ["npm", "run", "server"]
EXPOSE 3000