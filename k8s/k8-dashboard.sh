#!/bin/bash

case $1 in
  create)
    kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard-arm.yaml && \
    kubectl create clusterrolebinding deathray-admin --clusterrole=cluster-admin --serviceaccount=kube-system:deathray-admin
    ;;
  delete)
    kubectl delete -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard-arm.yaml && \
    kubectl delete clusterrolebinding deathray-admin
    ;;
esac
