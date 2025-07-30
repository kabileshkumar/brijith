#!/bin/bash

# This script runs the portfolio website without any server dependencies
# Ideal for VSCode local development environments

# Install dependencies if they don't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the client-side development server
echo "Starting the portfolio website..."
npm run dev