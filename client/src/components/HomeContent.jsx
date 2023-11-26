import { useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'
import { Products } from './Products'

export function HomeContent () {
  const { products, getProducts, loading } = useProducts({ search: '' })

  useEffect(() => {
    getProducts({ search: '' })
  }, [getProducts])
  return (
    loading
      ? (
        <div className='text-center'>
          <span className='spinner-border spinner-border-sm me-2 mt-5' aria-hidden='true' />
          <span role='status'>Cargando...</span>
        </div>)

      : <Products products={products} />
  )
}
