
const baseUrl = "http://localhost:4000/api/v1"

//obtener todas las marcas
export const obtenerBrands = async () => {
  const  res = await fetch(baseUrl+"/brands")
  const json = await res.json()
  
  return json
}

//obtener todas las categorias
export const obtenerCategories = async () => {
  const  res = await fetch(baseUrl+"/categories")
  const json = await res.json()
  
  return json
}


//obtener todos los productos
export const obtenerProducts = async () => {
  const  res = await fetch(baseUrl+"/products")
  const json = await res.json()
  
  return json
}

//crear un producto
export const crearProduct = async (product) => {
console.log("🚀 ~ file: fetch.js:31 ~ crearProduct ~ product:", product)



  await fetch(baseUrl+'/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })

}
