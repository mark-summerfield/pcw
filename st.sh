#!/bin/bash
clc -s
ls -lh pcw.mag
go mod tidy
go fmt .
staticcheck .
go vet .
golangci-lint run
git st
