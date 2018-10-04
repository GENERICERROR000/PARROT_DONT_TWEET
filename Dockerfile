FROM node:8.12.0-alpine
LABEL Maintainer="GENERIC ERROR"
LABEL Description="Dockerfile for PARROTS_DONT_TWEET API"

# Ports to open
EXPOSE 3000

# Environment Variables
ENV DB_PORT='9200'
ENV API_PORT='3000'
ENV TWIT_CONSUMER_KEY='null'
ENV TWIT_CONSUMER_SECRET='null'
ENV TWIT_ACCESS_TOKEN='null'
ENV TWIT_ACCESS_TOKEN_SECRET='null'

# Copy API into container
COPY . /opt/PARROTS_DONT_TWEET/

# Change to root of PARROTS_DONT_TWEET
WORKDIR /opt/PARROTS_DONT_TWEET/

# Install pm2 to daemonize app
RUN yarn global add pm2

# Install node packages
RUN yarn cache clean --force && \
    yarn install --save

# Start API
CMD ["pm2", "start", "server.js"]
