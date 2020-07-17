#!/bin/sh
echo "add png files"
if [ -e .commit ]
    then
    rm .commit
    git add .
    git commit --amend -C HEAD --no-verify
fi
exit
