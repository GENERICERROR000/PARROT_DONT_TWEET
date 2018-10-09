FROM node:10.11.0-alpine as node-modules
WORKDIR /tmp/
COPY package.json .
RUN yarn cache clean --force && yarn install --save


FROM resin/raspberry-pi-alpine-node:8.0.0-slim
LABEL Maintainer="GENERIC ERROR"
LABEL Description="Dockerfile for PARROTS_DONT_TWEET API"
# Ports to open
EXPOSE 3000
# Copy API into container
COPY . /opt/PARROTS_DONT_TWEET/
# Change to root of PARROTS_DONT_TWEET
WORKDIR /opt/PARROTS_DONT_TWEET/
# Copy node_modules from staged build
COPY --from=node-modules /tmp/node_modules node_modules/
# Install node packages
# RUN yarn cache clean --force && yarn install --save
# Start API
# CMD ["pm2-runtime", "server.js"]
# Install node packages - using ARM
# RUN npm install pm2 --global && npm install
RUN npm install pm2 -g
# Start API
CMD ["pm2", "start", "server.js"]
# Environment Variables Required For Running (Not Set)
# ENV API_PORT
# ENV AWS_REGION
# ENV AWS_ACCESS_KEY_ID
# ENV AWS_ACCESS_KEY_ID
# ENV TWITTER_USER_ID_TO_PARROT
# ENV TWITTER_USER_ID_PARROT
# ENV TWIT_CONSUMER_KEY
# ENV TWIT_CONSUMER_SECRET
# ENV TWIT_ACCESS_TOKEN
# ENV TWIT_ACCESS_TOKEN_SECRET
