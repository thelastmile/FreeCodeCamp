var secrets = require('../config/secrets');

module.exports = {
  db: {
    connector: 'mongodb',
    connectionTimeout: 10000,
    url: secrets.db
  },
  // mail: {
  //   connector: 'mail',
  //   transport: {
  //     type: 'ses',
  //     accessKeyId: process.env.SES_ID,
  //     secretAccessKey: process.env.SES_SECRET
  //   }
  // }
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
};
