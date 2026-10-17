#!/bin/bash
# scripts/install-ubuntu.sh
# Installation script for Ideal Makoo Enterprise Platform on Ubuntu 22.04/24.04

set -e

# Process arguments
DOMAIN=""
APP_DIR="/var/www/idealmakoo"

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --domain) DOMAIN="$2"; shift ;;
        --app-dir) APP_DIR="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done

if [ -z "$DOMAIN" ]; then
    echo "Error: --domain argument is required."
    exit 1
fi

echo "Installing Ideal Makoo Platform for $DOMAIN in $APP_DIR..."

# Setup Directories
sudo mkdir -p $APP_DIR/{source,releases,shared/media,shared/backups,shared/logs}
sudo chown -R $USER:$USER $APP_DIR

# 1. Install Dependencies
echo "Updating packages and installing Node.js 24 LTS, PostgreSQL 16..."
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs postgresql-16 postgresql-16-pgvector nginx certbot python3-certbot-nginx postfix

# 2. Setup PM2 / pnpm
sudo npm install -g pnpm pm2

# 3. Setup Nginx
echo "Configuring Nginx..."
cat <<EOF | sudo tee /etc/nginx/sites-available/$DOMAIN
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo systemctl restart nginx

# 4. Request SSL Certificate (Let's Encrypt)
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m info@$DOMAIN || echo "Certbot failed, probably rate limited or domain not pointing to this IP."

echo "Installation scaffold completed successfully."
