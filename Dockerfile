FROM nginx:1.22-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/default.conf /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html
COPY ./build .
CMD ["nginx", "-g", "daemon off;"]
