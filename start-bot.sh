#!/bin/bash

# Configuration
APP_DIR="/home/martinmalmgren/Documents/GitHub/discord-bot"
BRANCH="main"

# Error handling
set -e

error_exit() {
    echo "Error: $1" >&2
    exit 1
}

# Change to application directory
cd "$APP_DIR" || error_exit "Could not change to $APP_DIR"

echo "Updating the bot..."

# Git operations
git checkout $BRANCH || error_exit "Failed to checkout $BRANCH"
git fetch || error_exit "Failed to fetch updates"
git pull || error_exit "Failed to pull updates"

# Check if package.json has changed
if git diff HEAD@{1} HEAD --name-only | grep "package.json"; then
    echo "Package.json changes detected. Performing clean install..."
    rm -rf node_modules package-lock.json
    npm cache clean --force
    npm install || error_exit "Failed to install dependencies"
else
    echo "Installing dependencies..."
    npm install || error_exit "Failed to install dependencies"
fi

# Start application
echo "Starting bot..."
npm start || error_exit "Failed to start bot"
