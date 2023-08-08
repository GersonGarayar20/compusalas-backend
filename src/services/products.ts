import { products } from '../data/products'
import { verProductos } from '../bd/sqlite'

export const allProducts = async () => {
  const data = await verProductos()
  console.log('🚀 ~ file: products.ts:6 ~ allProducts ~ data:', data)

  return data
}
export const productById = (id: string) => products.find(p => p.id === id)
