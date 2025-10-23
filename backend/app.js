import express from 'express';
import cors from 'cors';
import logger from './utils/logger.js';
import routes from './controllers/routes.js';
import config from './utils/config.js';
import { errorHandler, unknownEndpoint } from './utils/middleware.js';

const app = express();
app.use(express.json());

// Configure CORS to only allow requests from the frontend
const corsOptions = {
  origin: config.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use('/images', express.static('public/images'));
app.use(express.static('public'));
app.use('/api/', routes);

logger.info('Plantipod API connected 🫛');

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;