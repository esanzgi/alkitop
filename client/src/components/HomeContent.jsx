import { useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'
import { Loading } from './Loading'
import ProductCarousel from './ProductCarousel'

const SECCIONES = [
  'Lo mejor, al mejor precio',
  'Más alquilado',
  'Populares',
  'Invierno'
]

export function HomeContent () {
  const { products, getProducts, loading } = useProducts({ search: '' })

  useEffect(() => {
    getProducts({ search: '' })
  }, [getProducts])
  return (
    loading
      ? <Loading />
      : <CargarPorSecciones products={products} />
  )
}

function CargarPorSecciones ({ products }) {
  return (
    <>
      {
        SECCIONES.map((seccion, index) => (
          <div key={index} className='mt-5'>
            <h2 className='h1 ps-4 border-start border-black fw-bolder mb-5 border-success'>{seccion}</h2>
            <ProductCarousel products={products.slice(0, 10)} />
          </div>
        ))
      }
    </>
  )
}
