import { Router } from 'express'
import { getAllProducts, getProduct, getAllBrands, getAllCategories, addProduct, addBrand, addCategory, updateProduct, deleteProduct } from '../../controllers/products'

export const products = Router()

products
  .get('/products', getAllProducts)
  .get('/products/:id', getProduct)
  .get('/brands', getAllBrands)
  .get('/categories', getAllCategories)
  .post('/products', addProduct)
  .post('/brands', addBrand)
  .post('/categories', addCategory)
  .patch('/products/:id', updateProduct)
  .patch('/products/:id', deleteProduct)
