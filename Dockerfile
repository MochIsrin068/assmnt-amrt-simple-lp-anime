# Stage 1 // produce app
FROM node:14.17.4-alpine3.11 as builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn build

# Stage 2 // running app server
FROM nginx:1.17.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build ./
ENTRYPOINT ["nginx", "-g", "daemon off;"]