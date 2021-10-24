FROM node:lts-jessie

LABEL author="Amine Telli"

EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install -g nodemon
RUN npm install

CMD npm run start:dev