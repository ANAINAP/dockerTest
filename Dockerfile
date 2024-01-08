FROM node:18-alpine
WORKDIR /AxoSDKDocs
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm","start"]
