#!/usr/bin/env sh
cd /var/www
rm -rf ./vue-bmap-demo
git clone https://github.com/newcoderlife/vue-bmap-demo.git
cd vue-bmap-demo/scripts
sh update.sh
sh build.sh
