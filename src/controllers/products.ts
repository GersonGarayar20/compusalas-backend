import { Request, Response } from 'express'
import { allProducts, productById, getMarcas, getCategorias, addMarca, addCategoria, addProducto } from '../services/products'

import { validarBrand, validarProduct } from '../schemas/productsSchema'

// obtener todos los productos
export const getAllProducts = async (req: Request, res: Response) => {
  const products = await allProducts()
  return res.json({
    data: products
  })
}

// obtener un producto por id
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  const product = await productById(+id)

  if (product != null) {
    return res.json({ data: product })
  } else {
    return res.status(404).json({ message: 'product no found' })
  }
}

// obtener todas las marcas
export const getAllBrands = async (req: Request, res: Response) => {
  const brands = await getMarcas()

  if (brands != null) {
    return res.json({ data: brands })
  } else {
    return res.status(404).json({ message: 'marcas no found' })
  }
}

// obtener todas las categorias
export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await getCategorias()

  if (categories != null) {
    return res.json({ data: categories })
  } else {
    return res.status(404).json({ message: 'categorias no encontradas' })
  }
}
// añadir un producto
export const addProduct = async (req: Request, res: Response) => {
  console.log('entro en la ruta')
  const result = validarProduct(req.body)

  if (result.success) {
    console.log(result.data)
    const data = await addProducto(result.data)
    return res.json({ data, message: 'producto añadido' })
  } else {
    return res.status(404).json({ message: 'no se puedo añadir el producto' })
  }
}

// añadir una marca
export const addBrand = async (req: Request, res: Response) => {
  const result = validarBrand(req.body)

  if (result.success) {
    const data = await addMarca(result.data.name)
    return res.json({ data, message: 'categoria añadida' })
  } else {
    return res.status(404).json({ message: 'error' })
  }
}

// añadir una categoria
export const addCategory = async (req: Request, res: Response) => {
  const result = validarBrand(req.body)

  if (result.success) {
    const data = await addCategoria(result.data.name)
    return res.json({ data, message: 'marca añadida' })
  } else {
    return res.status(404).json({ message: 'error' })
  }
}

// actualizar un producto
export const updateProduct = async (req: Request, res: Response) => {
  return res.json({ product: 'producto actualizado' })
}

export const deleteProduct = async (_req: Request, res: Response) => {
  return res.json({ product: 'producto eliminado' })
}
