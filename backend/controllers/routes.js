import express from 'express';
const router = express.Router();

import blogRouter from './blog.js';
import coursesRouter from './courses.js';
import podcastsRouter from './podcasts.js';

router.get('/', (req, res, next) => {
  try {
    res.json({
      message: "Welcome to the PlantiPod API  🌱",
      endpoints: {
        blog: "/api/blog",
        courses: "/api/courses",
        podcast: "api/podcasts"
      }
    })
  } catch (err) {
    next(err);
  }
})

router.use('/blog', blogRouter);
router.use('/courses', coursesRouter);
router.use('/podcasts', podcastsRouter);

export default router;