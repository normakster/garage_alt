var config = {
  state: {
    express: true,
    server: true,
    db: true
  },
  express: {
    HOST: '0.0.0.0',
    PORT: '8081'
  },
  db: {
    _USER: 'normak',
    _PWD: 'kameron',
    HOST: 'db',
    PORT: '27017',
    database: 'test'
  },
  start: {
    server: "",
    db: ""
  }
}

module.exports = config;
