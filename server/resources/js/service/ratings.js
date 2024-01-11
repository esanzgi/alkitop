export const getAvgRatingByProductService = async ({ idProduct }) => {
  //if (!idProduct) return null
  console.log('Service idproduct', idProduct)

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/ratings/avg/${idProduct}`)
    const avg = await response.json()
    console.log('API Response:', avg); // Log the API response
    return {
      avgRating: avg.avg_rating
    }
  } catch (error) {
    throw new Error('Error searching user with idOwner:  ' + idOwner)
  }
} 