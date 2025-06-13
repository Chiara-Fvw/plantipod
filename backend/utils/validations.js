import { body } from 'express-validator';

export const blogValidationRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('The post must have a content.')
]