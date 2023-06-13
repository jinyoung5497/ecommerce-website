const express = require('express')
const { getProducts } = require('../controllers/ProductController')

const router = express.Router()

// GET all Boards
router.get('/:id', getProducts)

module.exports = router
