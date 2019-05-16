#!/usr/bin/env sh
cd ..
git reset --hard origin/master
git clean -f -d
git pull
