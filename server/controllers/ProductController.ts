import { Request, Response } from 'express'
import Product from '../models/ProductSchema'

const mongoose = require('mongoose')

// get product with id
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = await Product.find()

    if (!product) {
      res.status(404).json({ error: 'No such Product' })
      return
    }

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

// get product with id
export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: 'Invalid ID' })
    return
  }

  try {
    const product = await Product.findOne({ _id: id })

    if (!product) {
      res.status(404).json({ error: 'No such Product' })
      return
    }

    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
