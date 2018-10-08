#!/bin/bash

case $1 in
  create)
    sh secrets.sh create && \
    kubectl apply -f parrots-dont-tweet.yaml -n parrots-dont-tweet
    ;;
  delete)
    sh secrets.sh delete && \
    kubectl delete -f parrots-dont-tweet.yaml -n parrots-dont-tweet
    ;;
esac
