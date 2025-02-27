#!/bin/bash

# Build the application
npm run build

# Create out directory if it doesn't exist
mkdir -p out

# Copy PHP files
cp public/process-form.php out/
cp public/.htaccess out/

# Create a zip file for deployment
zip -r deployment.zip out/*
