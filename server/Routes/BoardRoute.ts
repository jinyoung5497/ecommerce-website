const express = require('express')
const { getBoards } = require('../controllers/BoardController')

const router = express.Router()

// GET all Boards
router.get('/data', getBoards)

module.exports = router
