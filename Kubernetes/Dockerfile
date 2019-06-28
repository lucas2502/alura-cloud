FROM php:5.6-apache
RUN docker-php-ext-install mysqli
COPY /volume_mysql/loja /var/www/html
EXPOSE 80