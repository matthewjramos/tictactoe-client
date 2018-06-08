#!/bin/bash

curl "https://aqueous-atoll-85096.herokuapp.com/users/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
