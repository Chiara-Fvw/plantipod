import express from 'express';
import pool from '../db/init.js';
import { podcastValidationRules } from '../utils/validations.js';
import { validationResult } from 'express-validator';

const podcastsRouter = express.Router();

podcastsRouter.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM podcasts');
    const podcasts = result.rows;
    res.json(podcasts);
  } catch (err) {
    next(err);
  }
});

podcastsRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM podcasts WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({error: 'Podcast not found'})
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

podcastsRouter.post('/', podcastValidationRules, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }
  
  const {episode_num, title, release_date, duration} = req.body;
  try {
    const response = await pool.query(`INSERT INTO podcasts (episode_num, title, release_date, duration) VALUES ($1, $2, $3, $4)`, [episode_num, title, release_date, duration]);
    if (response.rowCount === 0) return res.status(400).json({error: 'Can not create the podcast episode.'});
    res.status(201).json(response.rows[0]);
  } catch (err) {
    next(err);
  }
});

podcastsRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const updates = Object.entries(req.body);

  if (updates.length === 0) {
    return res.status(404).json({error: 'No fields to update'});
  }

  const fields = updates.map(([key], index) => `${key} = $${index + 1}`).join(', ');
  const values = updates.map(([, value]) => value);
  try {
    const query = `UPDATE podcasts SET ${fields} WHERE id = $${values.length + 1}`;
    values.push(id);

    const response = await pool.query(query, values);

    if (response.rowCount === 0) return res.status(404).json({error: 'Podcast not found.'});

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

podcastsRouter.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await pool.query(`DELETE FROM podcasts WHERE id=$1`, [id]);
    if (result.rowCount === 0) return res.status(404).json({error: 'Podcast not found.'});
    res.status(204).end();
  } catch (err) {
    next(err)
  }
});

export default podcastsRouter;