#!/bin/bash
clc -s
wc pcw.tdb
echo no py app to check
# unrecognized.py -q
# python3 -m flake8 --ignore=W504,W503,E261,E303 .
# python3 -m vulture . | grep -v 60%.confidence
echo no go app to check
# go mod tidy
# go fmt .
# staticcheck .
# go vet .
# golangci-lint run
git st
