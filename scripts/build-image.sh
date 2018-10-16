#!/bin/bash

docker build . --tag nkernis/parrot_dont_tweet:$1-arm && docker push nkernis/parrot_dont_tweet:$1-arm
