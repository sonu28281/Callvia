#!/bin/bash

echo "🚀 Setting up Callvia website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Start dev server
echo "🎉 Starting development server..."
npm run dev
