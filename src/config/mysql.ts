import mysql from 'mysql2/promise'

const conexionString = process.env.DATABASE_URL ?? ''
const conectarPlanetScale = async () => {
  console.log('conexion a PlanetScale')
  return await mysql.createConnection(conexionString)
}

// obtener todos los productos
export const getAllProducts = async () => {
  const connection = await conectarPlanetScale()
  try {
    const [rows] = await connection.query('SELECT * FROM product')
    /* console.log('resultados del select', rows) */
    return rows
  } catch (error) {
    console.error('error en el select')
  } finally {
    await connection.end()
  }
}

// obtener un producto
export const getProductsById = async (id: number) => {
  const connection = await conectarPlanetScale()
  try {
    const [rows] = await connection.query('SELECT * FROM product WHERE id = ?', [id])
    /* console.log('resultados del select', rows) */
    return rows
  } catch (error) {
    console.error('error en el select')
  } finally {
    await connection.end()
  }
}

// obtener todas las marcas o categorias
export const getAllBrand = async () => {
  const connection = await conectarPlanetScale()
  try {
    const [rows] = await connection.query('SELECT * FROM brand')
    return rows
  } catch (error) {
    console.error('error en el select')
  } finally {
    await connection.end()
  }
}

// obtener todas las categorias o categorias
export const getAllCategory = async () => {
  const connection = await conectarPlanetScale()
  try {
    const [rows] = await connection.query('SELECT * FROM category')
    return rows
  } catch (error) {
    console.error('error en el select')
  } finally {
    await connection.end()
  }
}

// verificar marca
export const verifyBrand = async (name: string) => {
  const connection = await conectarPlanetScale()
  try {
    const [rows]: any = await connection.query('SELECT * FROM brand WHERE name = ?', [name])

    return rows.length > 0
  } catch (error) {

  } finally {
    await connection.end()
  }
}
// si no existe marca crear una
// buscar categoria
// si no existe categoria crear una

// crear un producto
export const addProduct = async (product: any) => {
  const connection = await conectarPlanetScale()
  try {
    const [result] = await connection.execute('INSERT INTO product (name, image, category, brand, price, stock, description) VALUES (?,?,?,?,?,?,?)', [
      product.name,
      product.image,
      product.category,
      product.brand,
      product.price,
      product.stock = product.stock ?? 1,
      product.description = product.description ?? 'descripcion'
    ])
    console.log('🚀 ~ file: mysql.ts:40 ~ PlanetScale ~ addProduct ~ result:', result)
    return result
  } catch (error) {
    console.error('error en el insert')
  } finally {
    await connection.end()
  }
}

// actulizar un producto
export const updateProduct = async (id: number, product: any) => {
  const connection = await conectarPlanetScale()
  try {
    // buscar el product
    const productFound: any = await getProductsById(id)

    if (productFound.lenght > 0) {
      // crear el objeto
      const newProduct = {
        id,
        ...productFound[0],
        ...product
      }

      // actualizar el producto

      await connection.execute('UPDATE product SET name = ?, image = ?, category = ?, brand = ?, price = ?, stock = ?, description = ? WHERE id = ?', [
        newProduct.name,
        newProduct.image,
        newProduct.category,
        newProduct.brand,
        newProduct.price,
        newProduct.stock,
        newProduct.description,
        id
      ])
    }
  } catch (error) {
    throw new Error('Error al actualizar producto')
  } finally {
    await connection.end()
  }
}

// eliminar un producto
export const deleteProduct = async (id: number) => {
  const connection = await conectarPlanetScale()

  try {
    await connection.execute('DELETE FROM product WHERE id = ?', [id])
  } catch (error) {
    throw new Error('Error al eliminar producto')
  } finally {
    await connection.end()
  }
}

// filtros y busquedas
