#!/bin/bash

BUILD_NAME="astro-detected.zip"
zip -r $BUILD_NAME ./* -x "README.md" "build.sh"
