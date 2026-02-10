FROM php:8.2-apache

# 1. Installation des dépendances système et compilation de intl
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libpng-dev \
    libicu-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-configure intl \
    && docker-php-ext-install pdo pdo_pgsql intl

RUN a2enmod rewrite

WORKDIR /var/www/html

# 2. Copie des fichiers
COPY . /var/www/html

ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 3. Installation de Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# 4. Installation des dépendances (AVEC LE FLAG D'IGNORANCE OBLIGATOIRE)
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80

CMD sh -c "php artisan migrate --force && apache2-foreground"

