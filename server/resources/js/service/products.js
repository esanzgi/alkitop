// https://fakestoreapi.com/products

// https://api.escuelajs.co/api/v1/products

//const PRODUCTS_ENDPOINT = 'http://127.0.0.1:8000/products/search?search='

export const searchProducts = async ({ search }) => {
  if (!search) return null

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/products/${search}`)
    const products = await response.json()
    return products?.map(product => ({
      id: product.id_product,
      title: product.name,
      price: product.price,
      image: product.images | product.image,
      rate: product.avg_rating,
      description: product.description,
      id_owner: product.id_owner,
      isEco: product.isEco,
      location: product.location,
      category: product.category,
    }))
  } catch (error) {
    throw new Error('Error searching products')
  }
}
