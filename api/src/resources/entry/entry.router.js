import { Router } from 'express'
import { findOne, findMany, create } from './entry.controller.js'

const router = Router()

// /api/item
router
  .route('/')
  .get(findMany)
  .post(create)

// /api/item/:id
router
  .route('/:id')
  .get(findOne)

export default router
