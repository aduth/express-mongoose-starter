module.exports = {
  development: {
    rootPath: require('path').normalize(__dirname + '/..'),
    db: 'mongodb://localhost/test'
  },
  production: {}
};
