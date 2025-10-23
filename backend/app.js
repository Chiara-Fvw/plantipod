import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
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

// Rate limiting: Prevent abuse and DDoS attacks
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const postLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 POST/PUT/DELETE requests per minute
  message: { error: 'Too many modifications from this IP, please slow down.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply general rate limiter to all API routes
app.use('/api/', generalLimiter);

// Apply stricter rate limiter to write operations
app.use('/api/blog', (req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    return postLimiter(req, res, next);
  }
  next();
});

app.use('/api/courses', (req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    return postLimiter(req, res, next);
  }
  next();
});

app.use('/api/podcasts', (req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    return postLimiter(req, res, next);
  }
  next();
});

app.use('/images', express.static('public/images'));
app.use(express.static('public'));
app.use('/api/', routes);

logger.info('Plantipod API connected 🫛');

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.use(unknownEndpoint);
app.use(errorHandler);

export default app;