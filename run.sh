#!/usr/bin/env bash
PROJECT_FOLDER=/var/www/marketplaceapp
cd ${PROJECT_FOLDER}
echo "Starting Deployment"
if command -v pm2 ; then
  echo "Stopping Node Processing Manager PM2"
  pm2 stop ecosystem.config.js
fi
echo "Using node version $(node -v)"
echo "Installing Node modules for NLA-PLO"
yarn install
if command -v pm2 ; then
  echo "Restarting Node Processing Manager PM2"
  pm2 start ecosystem.config.js
fi
echo ".........ALL DONE DEPLOY COMPLETE........"
cd ${PROJECT_FOLDER}
