import './config/dotenv'

import express, { Express } from 'express'
import { products } from './routes/v1/products'
import cors from 'cors'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1', products)

const port = process.env.port ?? 4000

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
