module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: 0,
    define: {
      timestamp: true,
      underscored: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: ''
  },
  production: {
    username: '',
    password: '',
    database: '',
    host: '',
    dialect: ''
  }
};
