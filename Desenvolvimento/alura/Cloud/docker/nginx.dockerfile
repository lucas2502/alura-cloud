FROM nginx:latest
MAINTAINER Lucas Gonçalves
COPY /public /var/www/public
COPY /docker/config/nginx.config /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT nginx
# Parametro extras para o entrypoint
CMD -g daemon off;