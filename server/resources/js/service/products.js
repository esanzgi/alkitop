// https://fakestoreapi.com/products

import { APP_URL } from "@/assets/utils/constants"

// https://api.escuelajs.co/api/v1/products

//const PRODUCTS_ENDPOINT = 'http://127.0.0.1:8000/products/search?search='

export const searchProducts = async ({ search, page }) => {
  if (!search || !page) return null
  // products?search=${search}&page=${page}
  // /api/products/${search}  lenokua
  console.log('page api,', page)

  try {
    const response = await fetch(`${APP_URL}/api/products/?search=${search}&page=${page}`)
    const products = await response.json()
    console.log('API PRODUCTS P', products)
    return products?.map(product => ({
      id: product.id_product,
      title: product.name,
      price: product.price,
      image: product.image,
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


// return {
//   products: result.data.map(product => ({
//     id: product.id_product,
//     title: product.name,
//     price: product.price,
//     image: product.image,
//     rate: product.avg_rating,
//     description: product.description,
//     id_owner: product.id_owner,
//     isEco: product.isEco,
//     location: product.location,
//     category: product.category,
//   })),
//   totalPages: result.last_page,
//   currentPage: result.current_page
// }