FROM php:8.2-apache

# Installation des dépendances système et de l'extension intl
RUN apt-get update && apt-get install -y libpq-dev libpng-dev libicu-dev zip unzip git && docker-php-ext-configure intl && docker-php-ext-install pdo pdo_pgsql intl

RUN a2enmod rewrite

WORKDIR /var/www/html

COPY . /var/www/html

ENV APACHE_DOCUMENT_ROOT /var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

RUN composer install --no-dev --optimize-autoloader

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80

CMD sh -c "php artisan migrate --force && apache2-foreground"
