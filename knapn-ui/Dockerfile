# Stage 1: Build the React application
FROM node:14 as build

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and both possible lock files (only copies the files if they exist)
COPY package.json package-lock.json* yarn.lock* ./


# Install dependencies
RUN npm install --silent || yarn install --silent

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the React application
RUN npm run build || yarn build

# Stage 2: Serve the React application from Nginx
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the Docker host, so we can access it from the outside.
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
