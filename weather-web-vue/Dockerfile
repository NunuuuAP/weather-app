# Use a node.js image as a base image
FROM node:latest

# Install a simple http server to serve our static content
RUN npm install -g http-server

# Make the 'app' folder the current working directory
WORKDIR /app

# Copy 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Build application for minified production
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]