import { APP_URL } from "@/assets/utils/constants"

export const getAvgRatingByProductService = async ({ idProduct }) => {
  if (!idProduct) return null
  console.log('Service idproduct', idProduct)

  try {
    const response = await fetch(`${APP_URL}/api/ratings/avg/${idProduct}`)
    const avg = await response.json()
    console.log('API Response:', avg); // Log the API response
    return {
      avgRating: avg.avg_rating
    }
  } catch (error) {
    throw new Error('Error searching user with idOwner:  ' + idOwner)
  }
} 