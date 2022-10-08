#!/bin/bash

DATABASE_TABLE_NAME="parkingspotdetector"

echo "db.dropDatabase('$DATABASE_TABLE_NAME'); exit;" | mongosh
