FROM keymetrics/pm2:10-alpine
LABEL Maintainer="GENERIC ERROR"
LABEL Description="Dockerfile for PARROTS_DONT_TWEET API"

# Ports to open
EXPOSE 3000

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

# Copy API into container
COPY . /opt/PARROTS_DONT_TWEET/

# Change to root of PARROTS_DONT_TWEET
WORKDIR /opt/PARROTS_DONT_TWEET/

# Install node packages
RUN yarn cache clean --force && \
    yarn install --save

# Start API
CMD ["pm2-runtime", "server.js"]
