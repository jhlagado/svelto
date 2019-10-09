# svelto
Starter for Svelte 3 projects

Install Mongo

See for installation instructions:
https://docs.mongodb.com/manual/installation/

For example install on MacOS
```
brew tap mongodb/brew
brew install mongodb-community@4.2
```
Run Mongo Daemon

```
mongod --config /usr/local/etc/mongod.conf
```

now start the backend server

```
npm run server
```
expose the port 4000

configure `config/config.json` to point to the backend server

e.g.

```json
{
    "SERVICE_URL": "http://locahost:4000/",

    "FEATURE_TOGGLES": {
    }
}
```

start the front end

```
npm start
```
expose the port 2200

