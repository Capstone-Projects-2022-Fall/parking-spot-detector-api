#!/bin/bash

DATABASE_TABLE_NAME="parkingspotdetector"

echo "db.dropDatabase(); exit;" | mongosh $DATABASE_TABLE_NAME 
