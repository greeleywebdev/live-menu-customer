# Stage 1

FROM node:alpine AS build-step
WORKDIR /app
RUN npm ci
RUN npm run build --prod

# Stage 2

FROM nginx:1.20.1
COPY --from=build-step /app/dist/ /usr/share/nginx/html
EXPOSE 4200:80