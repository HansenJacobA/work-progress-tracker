import { Router } from 'express';
import { findOne, findAll, create } from './topic.controller.js';

const router = Router();

// /api/topic
router
  .route('/')
  .get(findAll)
  .post(create);

// /api/topic/:id
router
  .route('/:id')
  .get(findOne);

export default router;
