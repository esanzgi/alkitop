import { useCallback, useRef, useState } from 'react'
import { searchProducts } from './products.js'

export function useProducts({ search = '', sort }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [, setError] = useState(null)
  const previousSearch = useRef(search)

  const getProducts = useCallback(async ({ search }) => {
    // if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newProducts = await searchProducts({ search })
      setProducts(newProducts)
    } catch (e) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [])

  // const sortedProducts = useMemo(() => {
  //   return sort
  //     ? [...products].sort((a, b) => a.title.localeCompare(b.title))
  //     : products
  // }, [sort, products])
  // return { products: sortedProducts, getProducts, loading }
  return { products, getProducts, loading }
}
