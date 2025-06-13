import express from 'express';
import pool from '../db/init.js';
import { courseValidationRules } from '../utils/validations.js';
import { validationResult } from 'express-validator';

const coursesRouter = express.Router();

coursesRouter.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    const courses = result.rows;
    res.json(courses);
  } catch (err) {
    next(err);
  }
});

coursesRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({error: 'Course not found'})
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

coursesRouter.post('/', courseValidationRules, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});
  }
  
  const {title, description, total_duration} = req.body;
  try {
    const response = await pool.query(`INSERT INTO courses (title, description, total_duration) VALUES ($1, $2, $3)`, [title, description, total_duration]);
    if (response.rowCount === 0) return res.status(400).json({error: 'Can not create the course.'});
    res.status(201).json(response.rows[0]);
  } catch (err) {
    next(err);
  }
});

coursesRouter.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  const updates = Object.entries(req.body);

  if (updates.length === 0) {
    return res.status(404).json({error: 'No fields to update'});
  }

  const fields = updates.map(([key], index) => `${key} = $${index + 1}`).join(', ');
  const values = updates.map(([, value]) => value);
  try {
    const query = `UPDATE courses SET ${fields} WHERE id = $${values.length + 1}`;
    values.push(id);

    const response = await pool.query(query, values);

    if (response.rowCount === 0) return res.status(404).json({error: 'Course not found.'});

    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

coursesRouter.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await pool.query(`DELETE FROM courses WHERE id=$1`, [id]);
    if (result.rowCount === 0) return res.status(404).json({error: 'Course not found.'});
    res.status(204).end();
  } catch (err) {
    next(err)
  }
});

export default coursesRouter;