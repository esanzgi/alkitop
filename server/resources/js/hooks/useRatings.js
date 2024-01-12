import { getAvgRatingByProductService } from "@/service/ratings"
import { useCallback } from "react"
import { useState } from "react"

export function useRatings({ idProduct }) {
  const [avg, setAvg] = useState([])

  const getAvgRatingByProduct = useCallback(async ({ idProduct }) => {

    try {

      const avg = await getAvgRatingByProductService({ idProduct })
      setAvg(avg)
    } catch (e) {
      console.error('Error al obtener el usuario:');
    }
  }, [])

  return { avg, getAvgRatingByProduct }
}