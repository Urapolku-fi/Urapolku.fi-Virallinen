#!/bin/bash

ROOT_DIR=/app

keys=("AUTH0_CALLBACK_URL" "AUTH0_DOMAIN" "AUTH0_CLIENTID" "AUTH0_AUDIENCE" "BACKEND_URL" "S3_ENDPOINT" "S3_FULL_ENDPOINT" "S3_BUCKET" "S3_KEY" "S3_SECRET")

# Replace env vars in files served by NGINX
for file in $ROOT_DIR/assets/config-*.js*;
do
  echo "Processing $file ...";
  for key in "${keys[@]}"
  do
    # Get environment variable
    value=$(eval echo "\$$key")
    echo "replace $key by $value"

    # replace __[variable_name]__ value with environment variable
    sed -i 's|__'"$key"'__|'"$value"'|g' $file
  done
done

nginx -g 'daemon off;'