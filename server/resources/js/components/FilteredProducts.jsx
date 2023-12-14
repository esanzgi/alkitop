import { useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'
import { Loading } from './Loading'
import { Products } from './Products'

export function FilteredProducts() {
  // const { products, getProducts, loading } = useProducts({ search: '' })

  // useEffect(() => {
  //   getProducts({ search: '' })
  // }, [getProducts])
  // return (
  //   loading
  //     ? <Loading />
  //     : <Products products={products} />
  // )

  return (
    <Products products={products} />
  )
}
