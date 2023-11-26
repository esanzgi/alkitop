import { useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'
import { Products } from './Products'

export function FilteredProducts () {
  const { products, getProducts, loading } = useProducts({ search: '' })

  useEffect(() => {
    getProducts({ search: '' })
  }, [getProducts])
  return (
    loading ? (<p className='text-center'>Cargando ...</p>) : <Products products={products} />
  )
}
