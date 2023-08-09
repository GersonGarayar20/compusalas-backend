import { Request, Response } from 'express'
import { allProducts, productById } from '../services/products'

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await allProducts()
  return res.json({
    data: products
  })
}

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  const product = productById(id)

  if (product != null) {
    return res.json({ data: product })
  } else {
    return res.status(404).json({ message: 'product no found' })
  }
}

export const addProduct = async (req: Request, res: Response) => {
  return res.json({ product: 'producto añadido' })
}

export const updateProduct = async (req: Request, res: Response) => {
  return res.json({ product: 'producto actualizado' })
}

export const deleteProduct = async (_req: Request, res: Response) => {
  return res.json({ product: 'producto eliminado' })
}
