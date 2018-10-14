#!/bin/bash

docker build . --tag nkernis/parrots_dont_tweet:$1-arm && docker push nkernis/parrots_dont_tweet:$1-arm
