#!/bin/bash
set -e

echo "Initializing PostgreSQL database..."

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE $POSTGRES_DATABASE;
    CREATE USER $POSTGRES_ADMIN_USER WITH SUPERUSER PASSWORD '$POSTGRES_ADMIN_PASSWORD';
    GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_ADMIN_USER;
EOSQL

echo "Database initialization complete."
