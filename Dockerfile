FROM richarvey/php-apache:latest
COPY . /var/www/html
ENV WEBROOT /var/www/html/public
ENV APP_ENV production
