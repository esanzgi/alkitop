export const searchProducts = async ({ search }) => {
  // if (!search) return null

  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const products = await response.json()
    console.log(products)
    return products
  } catch (error) {
    throw new Error('Error searching products')
  }
}
