// https://fakestoreapi.com/products

export const searchProducts = async ({ search }) => {
  // if (!search) return null

  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const products = await response.json()
    return products?.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images | product.image,
      rate: 4.99,
      description: product.description
    }))
  } catch (error) {
    throw new Error('Error searching products')
  }
}
