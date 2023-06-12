import dotenv from 'dotenv'
dotenv.config()
import { Request, Response, NextFunction } from 'express'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const boardRoute = require('./Routes/boardRoute')
// express app
const app = express()
app.use(cors())

// middleware
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/product', boardRoute)

// connect to db
mongoose
  .connect(process.env.URL as string)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err: Error) => {
    console.log(err)
  })
