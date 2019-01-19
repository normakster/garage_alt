var config = {
  state: {
    express: true,
    server: true,
    db: true
  },
  express: {
    HOST: '0.0.0.0',
    __HOST: 'localhost',
    _HOST: '172.16.30.11',
    PORT: '8081'
  },
  db: {
    _USER: 'normak',
    _PWD: 'kameron',
    ___HOST: '172.20.0.2',
    ____HOST: '127.0.0.1',
    HOST: 'garage_db',
    _HOST: '0.0.0.0',
    __HOST: 'localhost',
    PORT: '27017',
    _PORT: '3000',
    _database: 'squadOptimizer',
    _database: 'statusBoard',
    database: 'test'
  },
  start: {
    server: "",
    db: ""
  },
  secret: "james"
}

process.env.TEST = "james";

module.exports = config;
