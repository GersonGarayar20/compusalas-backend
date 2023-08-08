import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

import './bd/sqlite'

import { products } from './routes/v1/products'

dotenv.config()

const app: Express = express()
app.use(express.json())

app.use('/products', products)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server hola')
})

const port = process.env.port ?? 4000

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
