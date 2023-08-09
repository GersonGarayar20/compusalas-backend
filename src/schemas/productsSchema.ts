import z from 'zod'

const brandSchema = z.object({
  name: z.string()
})

export const validarBrand = (object) => {
  return brandSchema.safeParse(object)
}

const productSchema = z.object({
  name: z.string(),
  image: z.string().default('imagen'),
  brand: z.number().int(),
  category: z.number().int(),
  price: z.number().positive(),
  stock: z.number().int().positive().default(1),
  description: z.string().default('descripcion')
})

export const validarProduct = (object) => {
  return productSchema.safeParse(object)
}
