FROM resin/raspberry-pi-alpine-node:8.0.0-slim
LABEL Maintainer="GENERIC ERROR"
LABEL Description="Dockerfile for PARROTS_DONT_TWEET API"
# Ports to open
EXPOSE 3000
# Copy API into container
COPY . /opt/PARROTS_DONT_TWEET/
# Change to root of PARROTS_DONT_TWEET
WORKDIR /opt/PARROTS_DONT_TWEET/
# Install packages
RUN npm install pm2 --global && npm install
# Start API
CMD ["pm2-runtime", "app.js"]
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
