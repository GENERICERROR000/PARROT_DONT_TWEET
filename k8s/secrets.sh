#!/bin/bash

case $1 in
  create)
    kubectl create secret generic twitter-secrets --from-file=/.secrets/ -n parrots-dont-tweet
    ;;
  delete)
    kubectl delete secret twitter-secrets -n parrots-dont-tweet
    ;;
esac
