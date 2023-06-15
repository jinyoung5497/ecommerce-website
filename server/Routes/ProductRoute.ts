import express from 'express'
import { getProducts, getAllProducts } from '../controllers/ProductController'

const router = express.Router()

// GET specific product
router.get('/', getAllProducts)
// GET specific product
router.get('/:id', getProducts)

module.exports = router
