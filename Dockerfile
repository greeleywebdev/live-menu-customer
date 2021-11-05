# Stage 1

FROM node:alpine AS build-step
WORKDIR /app
COPY package*.json /app/
RUN npm install -g ionic
RUN npm ci
COPY ./ /app/
RUN npm run build --prod

# Stage 2

FROM nginx:1.20.1
COPY --from=build-step /app/www/ /usr/share/nginx/html
EXPOSE 80