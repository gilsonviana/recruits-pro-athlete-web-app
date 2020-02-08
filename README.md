# Recruits Pro: Athletes App

## HTTP Coverage

| Title | Description | HTTP | URL | Status |
|-------|-------------|------|-----|--------|
|Login|Authenticate user|POST|api/v2/auth/login|:white_check_mark:|
|Sign up|Create a new user|POST|api/v2/auth/signup|:white_check_mark:|
|Choose plan|Start the subscription plan process|POST|api/v2/subscription|:white_check_mark:|
|Update plan|Finish the subscription plan process|GET|api/v2/subscription/:subscription_id|:white_check_mark:|
|Update profile|Update profile|PATCH|api/v2/profile/athlete|:white_check_mark:|
|Get metrics flush|Get athletes metrics|GET|api/v2/profile/athlete/metricflush|:construction:|
|Forgot password|Create a new password|      |     |:construction:|
