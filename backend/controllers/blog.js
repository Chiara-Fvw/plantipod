import express from 'express';
import pool from '../db/init.js';
import { blogValidationRules } from '../utils/validations.js';
import { validationResult } from 'express-validator';
import DOMPurify from 'isomorphic-dompurify';

const blogRouter = express.Router();

blogRouter.get('/', async (req, res, next) => {
  try {
    const result = await pool.query('SELECT p.id, p.title, p.created_at, i.url AS image_url FROM blog_posts p LEFT JOIN blog_images i ON p.id = i.blog_id AND i.position = 1 ORDER BY p.created_at DESC');
    const posts = result.rows;
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

blogRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const postResult = await pool.query('SELECT * FROM blog_posts WHERE id = $1', [id]);
    const imgResult = await pool.query('SELECT * FROM blog_images WHERE blog_id = $1 ORDER BY position ASC', [id]);

    if (postResult.rows.length === 0) {
      return res.status(404).json({error: 'Post not found'})
    }
    res.json({
      ...postResult.rows[0],
      images: imgResult.rows,
    });
  } catch (err) {
    next(err);
  }
});

blogRouter.post('/', blogValidationRules, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }

  const {title, content} = req.body;
  const sanitizedContent = DOMPurify.sanitize(content);

  try {
    const response = await pool.query(`INSERT INTO blog_posts (title, content) VALUES ($1, $2) RETURNING *`, [title, sanitizedContent]);
    if (response.rowCount === 0) return res.status(400).json({error: 'Can not create the post.'});
    res.status(201).json(response.rows[0]);
  } catch (err) {
    next(err);
  }
});

blogRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const allowedFields = ['title', 'content'];

  // Sanitize content if it's being updated
  if (req.body.content) {
    req.body.content = DOMPurify.sanitize(req.body.content);
  }

  const updates = Object.entries(req.body).filter(([key]) => allowedFields.includes(key));

  if (updates.length === 0) {
    return res.status(400).json({error: 'No valid fields to update'});
  }

  const fields = updates.map(([key], index) => `${key} = $${index + 1}`).join(', ');
  const values = updates.map(([, value]) => value);
  try {
    const query = `UPDATE blog_posts SET ${fields}, updated_at = CURRENT_TIMESTAMP WHERE id = $${values.length + 1}`;
    values.push(id);

    const response = await pool.query(query, values);

    if (response.rowCount === 0) return res.status(404).json({error: 'Post not found.'});

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

blogRouter.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await pool.query(`DELETE FROM blog_posts WHERE id=$1`, [id]);
    if (result.rowCount === 0) return res.status(404).json({error: 'Post not found.'});
    res.status(204).end();
  } catch (err) {
    next(err)
  }
});

export default blogRouter;