#!/bin/bash

case $1 in
  start)
    docker run \
    -d \
    --restart always \
    -p 3000:3000 \
    -e API_PORT="$API_PORT" \
    -e AWS_REGION="$AWS_REGION" \
    -e AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" \
    -e AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" \
    -e TWITTER_USER_ID_TO_PARROT="$AWS_SECRET_ACCESS_KEY" \
    -e TWITTER_USER_ID_PARROT="$AWS_SECRET_ACCESS_KEY" \
    -e TWIT_CONSUMER_KEY="$AWS_SECRET_ACCESS_KEY" \
    -e TWIT_CONSUMER_SECRET="$AWS_SECRET_ACCESS_KEY" \
    -e TWIT_ACCESS_TOKEN="$AWS_SECRET_ACCESS_KEY" \
    -e TWIT_ACCESS_TOKEN_SECRET="$AWS_SECRET_ACCESS_KEY" \
    nkernis/parrots_dont_tweet:$2
    ;;
  stop)
    docker stop nkernis/parrots_dont_tweet:$2
    ;;
esac
