import { Request, Response } from 'express'
import board from '../models/BoardSchema'

const mongoose = require('mongoose')

// get all Board
const getBoards = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'invalid ID' })
  }

  const boards = await board.findOne(
    { boards: { $elemMatch: { _id: id } } },
    { boards: 1 }
  )

  if (!boards) {
    res.status(404).json({ error: 'No such Board' })
  }

  res.status(200).json(boards)
}

module.exports = {
  getBoards,
}
