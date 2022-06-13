FROM node:alpine
WORKDIR /server-app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm","start"]