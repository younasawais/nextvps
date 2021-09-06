FROM node:14.16.0-alpine3.13
RUN addgroup awais && adduser -S -G awais awais
USER awais
WORKDIR /app
EXPOSE 3000
COPY package*.json .
RUN npm install
COPY . .
ENV NAME=SOMETHING
CMD ["npm","run", "dev"]