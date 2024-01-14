import { useCallback, useRef, useState } from 'react'
import { searchProducts } from '../service/products.js'

export function useProducts({ searchProd = '', sort }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [, setError] = useState(null)
  const previousSearch = useRef(searchProd)
  const [filter, setFilter] = useState({
    minPrice: '',
    maxPrice: '',
    minRate: '',
    maxRate: '',
    isEco: ''
  })

  console.log('page')
  console.log('products', products)

  const getProducts = useCallback(async ({ search }) => {
    //if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newProducts = await searchProducts({ search, page })
      setProducts((prevProducts) => [...prevProducts, ...newProducts])
    } catch (e) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch
      console.log('Page Products', products)
      setLoading(false)
    }
  }, [])


  // const filterProducts = useCallback(() => {
  //   // Aplica la lógica de filtrado a los productos aquí
  //   const filteredProducts = products.filter(product => {


  //   });
  //   return filterProducts
  // }, [filter, products])

  // const sortedProducts = useMemo(() => {
  //   return sort
  //     ? [...products].sort((a, b) => a.title.localeCompare(b.title))
  //     : products
  // }, [sort, products])
  // return { products: sortedProducts, getProducts, loading }
  return { products, getProducts, loading, page, setPage }
}
