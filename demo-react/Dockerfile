FROM node:18-alpine3.18 as step01
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build 

FROM nginx:1.25.5
COPY --from=step01 /app/dist /usr/share/nginx/html