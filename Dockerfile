FROM node:16-alpine AS build-step
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./ /app/
RUN npm run build --prod

FROM nginx:1.20.1
COPY --from=build-step /app/www/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 4200:80