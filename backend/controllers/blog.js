import express from 'express';
import pool from '../db/init.js';
import logger from '../utils/logger.js';

const blogRouter = express.Router();

blogRouter.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM blog_posts');
  const posts = result.rows;
  res.json(posts);
});

blogRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM blog_posts WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({error: 'Post not found'})
    }
    res.json(result.rows[0]);
    
  } catch (err) {
    next(err)
  }
});

blogRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id;

})

export default blogRouter;