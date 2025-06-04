FROM php:8.2-fpm

# Cài các extension cần thiết cho Laravel
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git \
    && docker-php-ext-install pdo_mysql zip

WORKDIR /var/www/html

# Copy toàn bộ source code vào container
COPY . .

# Set quyền cho storage và cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000

CMD ["php-fpm"]