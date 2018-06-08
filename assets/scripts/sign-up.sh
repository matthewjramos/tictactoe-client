# #!/bin/bash

curl --include --request POST https://aqueous-atoll-85096.herokuapp.com/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "blob@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
