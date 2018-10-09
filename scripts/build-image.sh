#!/bin/bash

docker build . --tag nkernis/parrots_dont_tweet:$1 && docker push nkernis/parrots_dont_tweet:$1
