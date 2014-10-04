#!/bin/bash

options=(
  ".mimosa/emberTest/tests/testem.json"
)

if [ "$1" == "ci" ]; then
  for opt in "${options[@]}"
  do
    set -x
    testem ci --file "$opt"
    { set +x; } 2>/dev/null
  done
else
  len=${#options[@]}
  if [ $len -gt 1 ]; then
    if [ "$1" -gt "0" 2> /dev/null ] && [ "$1" -le "$len" ]; then
      idx=$1-1
      testem --file "${options[$idx]}"
    else
      echo
      echo "Usage: ./test.sh [test_number]"
      echo
      for i in "${!options[@]}"; do
        printf "[%s] %s\n" "$((i+1))" "${options[$i]}"
      done
      echo
    fi
  else
    testem --file "${options[0]}"
  fi
fi
