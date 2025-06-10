import config from './utils/config.js';
import pool from './db/init.js'
import logger from './utils/logger.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

logger.info('Connected to', config.DB_NAME)

app.get('/', (req, res) => {
  res.send('Welcome to PlantiPod')
})
app.get('/favicon.ico', (req, res) => res.status(204).end());

export default app;