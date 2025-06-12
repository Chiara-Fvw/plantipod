import express from 'express';
const router = express.Router();

import blogRouter from './blog.js';
import coursesRouter from './courses.js';
import podcastsRouter from './podcasts.js';


router.use('/blog', blogRouter);
router.use('/courses', coursesRouter);
router.use('/podcasts', podcastsRouter);

export default router;