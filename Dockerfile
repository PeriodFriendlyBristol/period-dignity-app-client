# Node.js image to build and compile the frontend.
FROM node:12.2.0-alpine

# Install requirements.
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# Add `/client/node_modules/.bin` to $PATH.
ENV PATH /app/node_modules/.bin:$PATH

# Copy the source code into the container.
COPY src src
COPY public public

# Start the development server.
CMD npm start
