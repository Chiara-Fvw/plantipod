import app from './app.js';
import pool from './db/init.js';
import config from './utils/config.js';
import logger from './utils/logger.js';

pool.query('SELECT NOW ()')
  .then(res => logger.info(`✅ PostgreSQL is ready!`))
  .catch(err => logger.error('❌ PostgreSQL connection error:', err));


app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

