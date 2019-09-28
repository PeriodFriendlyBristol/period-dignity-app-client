# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR .

# add `/client/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache client dependencies
COPY package.json package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# copy the app into the container
COPY src src
COPY public public

# start client
CMD ["npm", "start"]
