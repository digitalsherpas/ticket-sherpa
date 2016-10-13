var endpoints = {};

if (process.env.NODE_ENV === 'development') {
  endpoints = {
    WEB_SERVER_URL: 'http://localhost',
    WEB_SERVER_PORT: 3000,
    WEBPACK_DEV_SERVER_URL: 'http://localhost',
    WEBPACK_DEV_SERVER_PORT: 3001,
    ETH_SERVER_URL: 'http://localhost',
    ETH_SERVER_PORT: 3002,
    AUTH_SERVER_URL: 'http://localhost',
    AUTH_SERVER_PORT: 3003,
    DB_SERVER_URL: 'http://localhost',
    DB_SERVER_PORT: 3004,
    ES_SERVER_URL: 'http://localhost',
    ES_SERVER_PORT: 3005,
    // change your environment variables based on your local postgres database settings
    POSTGRES_CONNECTION_STRING: `postgres://${process.env.DATABASEUSER || 'postgres'}:${process.env.DATABASEPASSWORD || 'password'}@${process.env.DATABASEADDRESS || 'localhost'}:${process.env.DATABASEPORT || '5432'}/tickether`,
    ETHEREUM_CONNECTION_STRING: 'http://localhost:8545',
    BLOCKCHAIN_PORT: 8545,
    ELASTICSEARCH_URL: 'http://localhost',
    ELASTICSEARCH_PORT: 9200,
  };
} else if (process.env.NODE_ENV === 'production' && process.env.HOST_ENV === 'ecs') {
  endpoints = {
    ETH_SERVER_URL: 'http://54.190.58.228',
    ETH_SERVER_PORT: 3002,
    AUTH_SERVER_URL: 'http://auth',
    AUTH_SERVER_PORT: 3003,
    DB_SERVER_URL: 'http://db',
    DB_SERVER_PORT: 3004,
    ES_SERVER_URL: 'http://es',
    ES_SERVER_PORT: 3005,
    POSTGRES_CONNECTION_STRING: 'postgres://docker:docker@postgres:5432',
    ELASTICSEARCH_URL: 'http://elasticsearch',
    ELASTICSEARCH_PORT: 9200,
  };
} else if (process.env.NODE_ENV === 'production' && process.env.HOST_ENV === 'eth') {
  endpoints = {
    DB_SERVER_URL: 'http://52.33.65.180',
    DB_SERVER_PORT: 3004,
    ETHEREUM_CONNECTION_STRING: 'http://localhost:8545',
    BLOCKCHAIN_PORT: 8545,
  };
} else if (process.env.NODE_ENV === 'production' && process.env.HOST_ENV === 'web') {
  endpoints = {
    // WEB_SERVER_URL: '', // do not call URL directly, use relative urls
    WEB_SERVER_PORT: 3000,
    ETH_SERVER_URL: 'http://54.190.58.228',
    ETH_SERVER_PORT: 3002,
    AUTH_SERVER_URL: 'http://52.33.65.180',
    AUTH_SERVER_PORT: 3003,
    DB_SERVER_URL: 'http://52.33.65.180',
    DB_SERVER_PORT: 3004,
    ES_SERVER_URL: 'http://52.33.65.180',
    ES_SERVER_PORT: 3005,
    POSTGRES_CONNECTION_STRING: 'postgres://docker:docker@postgres:5432',
  };
} else {
  throw new Error('NODE_ENV environment variable not valid');
}

module.exports = endpoints;
