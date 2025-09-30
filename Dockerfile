# Use official Node.js 21 image
FROM node:21

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production
COPY . .

EXPOSE 43000

RUN npm install pm2 -g
CMD ["pm2-runtime", "start", "index.js", "--name", "firewall-second"]
