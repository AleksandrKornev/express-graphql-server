  
let mysql = require('mysql2/promise');
let log4js = require('log4js');

const logger = log4js.getLogger('DB Connection');

const poolConfig = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456789',
  multipleStatements: true,
  database: 'test',
  charset: 'utf8mb4',
};

logger.warn(poolConfig);

const readPool = mysql.createPool(poolConfig);
const writePool = mysql.createPool(poolConfig);

readPool.on('error', (err) => {
  logger.error(err);
  throw err;
});

writePool.on('error', (err) => {
  logger.error(err);
  throw err;
});

module.exports = {
  readPool, writePool
} 