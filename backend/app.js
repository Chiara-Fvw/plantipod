import express from 'express';
import cors from 'cors';
import logger from './utils/logger.js';
import routes from './controllers/routes.js';
import { errorHandler, unknownEndpoint } from './utils/middleware.js';

const app = express();
app.use(express.json());

app.use(cors());
app.use('/api/', routes);

logger.info('Plantipod API connected 🫛');

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;