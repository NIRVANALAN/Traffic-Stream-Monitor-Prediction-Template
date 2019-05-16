#!/usr/bin/env sh
npm install
npm run build
chown -R www-data:www-data /var/www/vue-bmap-demo
