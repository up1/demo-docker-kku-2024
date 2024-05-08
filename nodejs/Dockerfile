FROM node:18-alpine3.18
WORKDIR /app
COPY . .
RUN npm install
RUN npm install pm2 -g
CMD ["pm2-runtime", "demo.config.js"]