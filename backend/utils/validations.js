import { body } from 'express-validator';

export const blogValidationRules = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('The post must have a content.')
];
export const courseValidationRules = [
  body('title').notEmpty().withMessage('Course must have a title.'),
  body('description').notEmpty().withMessage('Courses must have a description.'),
  body('img').notEmpty().withMessage('Course must have an image.'),
  body('total_duration').notEmpty().withMessage('Course duration must be indicated.')
];

export const podcastValidationRules = [
  body('episode_num').notEmpty().withMessage('Podcast episode must have a number'),
  body('title').notEmpty().withMessage('Podcast episode must have a title'),
  body('release_date').notEmpty().withMessage('Must state a realease date.'),
  body('duration').notEmpty().withMessage('Episode must have a duration.')
];