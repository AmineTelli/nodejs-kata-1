FROM node:latest

LABEL author="Amine Telli"

EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install -g nodemon ts-node typescript
RUN npm install

CMD npm run start:dev