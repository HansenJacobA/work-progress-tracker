import { Router } from 'express';
import { findMany, create } from './entry.controller.js';

const router = Router();

// /api/entry
router
  .route('/')
  .get(findMany)
  .post(create);

// /api/entry/topic/:name
router
  .route('/topic/:name')
  .get(findMany);

export default router;
