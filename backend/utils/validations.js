import { body } from 'express-validator';

export const blogValidationRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('The post must have a content.')
];
export const courseValidationRules = [
  body('title').notEmpty().withMessage('Course must have a title.'),
  body('description').notEmpty().withMessage('Courses must have a description.'),
  body('total_duration').notEmpty().withMessage('Course duration must be indicated.')
];

export const podcastValidationRoules = [
  
]