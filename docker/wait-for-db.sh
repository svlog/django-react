#!/bin/bash
# wait-for-db.sh

until nc -z -v -w30 $POSTGRES_HOST $POSTGRES_PORT; do
  echo "Waiting for PostgreSQL at $POSTGRES_HOST:$POSTGRES_PORT..."
  sleep 1
done

echo "PostgreSQL is up - executing command"
exec "$@"
