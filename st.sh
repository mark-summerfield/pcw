#!/bin/bash
clc -s
ls -lh pcw.tdb
go mod tidy
go fmt .
staticcheck .
go vet .
golangci-lint run
git st
