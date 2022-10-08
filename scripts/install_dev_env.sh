#!/bin/bash

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    echo "Linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    # Mac OSX
    if ! command -v brew &> /dev/null
    then
        echo "Please install brew (https://brew.sh/)"
        exit
    fi

    brew update

    if ! brew list | grep "node" &> /dev/null
    then
        brew install "node"
    fi

    if ! brew list | grep "mongodb-community" &> /dev/null
    then
        brew install "mongodb-community"
    fi

    if ! brew list | grep "mongodb-database-tools" &> /dev/null
    then
        brew install "mongodb-database-tools"
    fi

    if ! brew list | grep "mongosh" &> /dev/null
    then
        brew install "mongosh"
    fi

    mongod &> /dev/null
elif [[ "$OSTYPE" == "cygwin" ]]; then
    # POSIX compatibility layer and Linux environment emulation for Windows
    echo "Posix"
elif [[ "$OSTYPE" == "msys" ]]; then
    # Lightweight shell and GNU utilities compiled for Windows (part of MinGW)
    echo "MinGW"
elif [[ "$OSTYPE" == "win32" ]]; then
    # I'm not sure this can happen.
    echo "win32"
elif [[ "$OSTYPE" == "freebsd"* ]]; then
    # ...
    echo "freebsd"
else
    # Unknown.
    echo "OS unknown"
fi
