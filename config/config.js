
module.exports = {
  development: {
    rootPath: require('path').normalize(__dirname + '/..'),
    db: process.env.DATABASE_URL || 'mongodb://localhost/test'
  },
  production: {
    db: process.env.MONGODB_URI
  }
};
