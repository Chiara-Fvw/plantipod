import pkg from 'pg';
import config from '../utils/config.js'; 
import logger from '../utils/logger.js';

const { Pool } = pkg;

const pool = new Pool({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
});

export default pool;