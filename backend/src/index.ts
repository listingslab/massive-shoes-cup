import {Request, Response} from 'express'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors({credentials: true}))
app.listen(4000, () => {
  console.log(`Endpoint: http://localhost:4000/api/events`)
})

const respond = (req: Request, res: Response, data: any) => {
  const {output} = data
  const response = output
  const api = {
    ...response,
  }
  res.json(api)
}

app.get('/api/events', async (req: Request, res: Response) => {
  try {
    const pool = require('./db')
    const result = await pool.query('SELECT * FROM events')
    respond(req, res, {output: {
      code: 200,
      severity: "success",
      message: "Massive Shoes Cup Event list",      
      data: result.rows,
    }})
  } catch (error) {
    respond(req, res, {output: {
      code: 500,
      severity: "error",
      message: `${error}`, 
    }})
  }
})
