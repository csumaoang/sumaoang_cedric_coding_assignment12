# Use the official Node.js image
FROM node:14

# Create and change to the app directory
WORKDIR /sumaoang_cedric_ui_garden

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code to the container image
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

# Make port 8083 available to the world outside this container
EXPOSE 8083

# Run the web service on container startup
CMD ["serve", "-s", "build", "-l", "8083"]
