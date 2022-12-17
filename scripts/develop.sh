#!/usr/bin/env bash

set -Eeuxo pipefail

args="$*"

configure_watches() {
  echo "Configuring watches..."

  watchman watch-project "$PWD"
  for j in scripts/watchman/*.json; do
    echo "Setting watch $j"
    watchman -j <"$j"
  done
}

restart_server() {
  echo "Starting development server..."
  pkill -fi "node" || true

  yarn dev &
  disown
}

wait_for_database() {
  echo "Waiting for database..."

  until nc -z -v -w30 neo4j 7687; do
    echo "Still waiting for database..."
    sleep 1
  done
}

watch_watchman() {
  echo "Launching Watchman..."
  watchman --logfile=- --log-level=debug --foreground watch-project "$PWD"
}

yarn_install() {
  echo "Installing new Yarn packages..."
  yarn install
}

case $args in
serve)
  wait_for_database
  restart_server
  ;;

watch)
  yarn_install
  wait_for_database
  restart_server
  watch_watchman
  ;;

watches)
  configure_watches
  ;;

yarn)
  yarn_install
  restart_server
  ;;

*)
  echo "Unknown command: $args"
  ;;
esac
