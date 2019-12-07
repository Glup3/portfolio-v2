# build react app
FROM node:11 as build

RUN mkdir /app

WORKDIR /app

COPY /package.json /app

RUN npm install --silent

RUN npm install react-scripts -g --silent

COPY . /app

RUN npm run build


# production environment aka nginx
FROM nginx:1.15

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]