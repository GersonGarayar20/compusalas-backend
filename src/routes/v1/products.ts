import { Router } from 'express'
import { getAllProducts, getProduct } from '../../controllers/products'

export const products = Router()

products
  .get('/', getAllProducts)
  .get('/:id', getProduct)
  /* .post("/", ()=>())
  .patch("/:id", ()=>()) */
