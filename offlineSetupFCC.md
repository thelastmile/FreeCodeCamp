# Offline Setup Guide

## Table of Contents

- [Getting Started](#getting-started)
- [Resetting](#resetting)

## Getting Started

The easiest way to get started is to clone the repository. I hope you are running node v4+. Dependencies seem to be fine.

```bash
# Clone from Hans's master
git clone https://github.com/thelastmile/FreeCodeCamp/
cd FreeCodeCamp
git checkout -b master
git pull origin master

# Install NPM dependencies
npm install

# Install Gulp globally if not already installed
npm install -g gulp

# Install Bower globally if not already installed
npm install -g bower

# Install Bower dependencies
bower install
```

*Private Environment Variables (API Keys)*
```bash
# Create a copy of the "sample.env" and name it as ".env".
# Populate it with the necessary API keys and secrets:
cp sample.env .env

# To run locally just make sure .env has:
MONGOHQ_URL='mongodb://localhost:27017/freecodecamp'
```

*Setting up email login*
NOTE: SIGN UP IS STILL BUGGY, IT TAKES YOU TO AN ERROR PAGE, BUT YOU HAVE SIGNED UP AND CAN NOW SIGN IN
edit server/datasources.local.js and overwrite their mail property with the below:

```bash
    "mail": {
        "name": "mail",
        "defaultForType": "mail",
        "connector": "mail",
        "transports": [
            {
                "type": "SMTP",
                "host": "mail.tlmworks.org",
                "secure": true,
                "port": 465,
                "auth": {
                    "user": "freecodecamp@tlmworks.org",
                    "pass": "{{ password here }}"
                }
            }
        ]
    }
```

*Seed the database*

```bash
# Start the mongo server in a separate terminal
mongod

# Initialize Free Code Camp
# This will seed the database for the first time.
# This command should only be run once.
npm run only-once
```

*Start the app*

```bash
# For production, do the following:
NODE_ENV=production node server/production-start.js

# For development, you can use gulp to start the application 
# and go to http://localhost:3000 or http://localhost:3001
gulp
```

Now navigate to your browser and open http://localhost:3001
If the app loads, congratulations - you're all set.

## Resetting

```bash
# Dropping the database in mongodb
mongo freecodecamp --eval "db.dropDatabase()"

# Dropping a user in mongodb by email
mongo
use freecodecamp
db.user.remove({email: email})
