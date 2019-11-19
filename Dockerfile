# Base NGINX image.
FROM nginx

# Copy the project files.
COPY build /usr/share/nginx/html
