import { Router } from 'express'
import { findOne, create } from './topic.controller.js'

const router = Router()

// /api/item
router
  .route('/')
  .get(findOne)
  .post(create)

// /api/item/:id
router
  .route('/:id')
  .get(findOne)

export default router
