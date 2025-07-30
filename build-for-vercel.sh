#!/bin/bash

# Build script for Vercel deployment of the client-side portfolio

echo "========================================"
echo "    Building portfolio for Vercel      "
echo "========================================"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build the project
echo "Building the portfolio website..."
npm run build

echo "Build completed successfully!"
echo "Your portfolio is ready for Vercel deployment."