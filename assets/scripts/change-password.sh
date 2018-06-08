#!/bin/bash

curl --include --request PATCH https://aqueous-atoll-85096.herokuapp.com/change-password \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
