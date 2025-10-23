import express from 'express';
const router = express.Router();

import blogRouter from './blog.js';
import coursesRouter from './courses.js';
import podcastsRouter from './podcasts.js';
import spotifyRouter from "./spotify.js";
import pool from '../db/init.js';

// Health check endpoint for monitoring
router.get('/health', async (req, res) => {
  try {
    // Check database connection
    await pool.query('SELECT 1');
    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      database: 'connected'
    });
  } catch (err) {
    res.status(503).json({
      status: 'error',
      timestamp: new Date().toISOString(),
      database: 'disconnected',
      error: err.message
    });
  }
});

router.get('/', (req, res, next) => {
  try {
    res.json({
      message: "Welcome to the PlantiPod API  🌱",
      endpoints: {
        health: "/api/health",
        blog: "/api/blog",
        courses: "/api/courses",
        podcast: "api/podcasts",
        spotify: "/api/spotify"
      }
    })
  } catch (err) {
    next(err);
  }
})

router.use('/blog', blogRouter);
router.use('/courses', coursesRouter);
router.use('/podcasts', podcastsRouter);
router.use('/spotify', spotifyRouter);

export default router;