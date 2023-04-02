FROM php:8.2-alpine3.17
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli pdo pdo_mysql
WORKDIR /var/www/html


# RUN chown -R www-data:www-data /var/www/html
