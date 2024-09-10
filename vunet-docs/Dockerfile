# Use the official NGINX image from Docker Hub
FROM nginx:alpine

# Copy the built files from the local 'build' directory to the default NGINX HTML directory
COPY ./build /usr/share/nginx/html

# Expose port 80 to allow access to the NGINX server
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
