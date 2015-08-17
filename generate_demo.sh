#!/usr/bin/zsh

export PATH=${PWD}/node_modules/.bin:$PATH
cd examples && webpack --progress
cd ..
mkdir -p guides/demo
cp examples/*.html guides/demo/
cp -R examples/build guides/demo/
cp templates/index.html guides/
