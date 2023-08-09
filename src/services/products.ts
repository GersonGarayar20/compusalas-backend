import { getAllProducts, getProductsById, getAllCategory, getAllBrand, addBrand, addCategory, addProduct } from '../config/mysql'

// obtener todos los productos
export const allProducts = async () => {
  const products = await getAllProducts()
  return products
}

// obtener un producto por id
export const productById = async (id: number) => await getProductsById(id)

// obtener todas las categorias
export const getCategorias = async () => await getAllCategory()
// obtener todas las marcas
export const getMarcas = async () => await getAllBrand()

// obtener los productos de una marca
// obtener los productos de una categoria

// crear una marca
export const addMarca = async (name: string) => await addBrand(name)

// crear una categoria
export const addCategoria = async (name: string) => await addCategory(name)

// crear un producto
export const addProducto = async (product: any) => await addProduct(product)

// actualizar un producto
// eliminar un producto
// eliminar una marca
// eliminar una categoria
