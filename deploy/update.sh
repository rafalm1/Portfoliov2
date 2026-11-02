#!/usr/bin/env bash
# Pulls the latest code, rebuilds, and restarts the app. Run on the server: bash deploy/update.sh
set -euo pipefail

cd "$(dirname "$0")/.."

git pull --ff-only
npm ci
npm run build
sudo systemctl restart portfolio

sleep 2
curl -fsS http://127.0.0.1:4000/api/health
echo
