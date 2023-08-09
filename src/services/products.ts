import { products } from '../data/products'
import { getAllProducts } from '../config/mysql'

// obtener todos los productos
export const allProducts = async () => {
  const products = await getAllProducts()
  return products
}

// obtener un producto por id
export const productById = (id: string) => products.find(p => p.id === id)

// obtener todas las categorias
// obtener todas las marcas

// obtener los productos de una marca
// obtener los productos de una categoria

// crear una marca
// crear una categoria

// crear un producto
// actualizar un producto
// eliminar un producto
// eliminar una marca
// eliminar una categoria
