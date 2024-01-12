import { useEffect } from 'react'
import { useProducts } from '../hooks/useProducts'
import { Footer } from './Footer'
import { Loading } from './Loading'
import ProductCarousel from './ProductCarousel'

const SECCIONES = [
  
  'Onena, preziorik onenean',
  'Alokatuena',
  'Popularrenak',
  'Negua'


]

export function HomeContent({ products, user}) {

  // const { products, getProducts, loading } = useProducts({ search: '' })

  // useEffect(() => {
  //   getProducts({ search: '' })
  // }, [getProducts])
  // return (
  //   loading
  //     ? <Loading />
  //     : (
  //       <div>
  //         <CargarPorSecciones products={products} />
  //       </div>
  //     )
  // )

  return (
    <CargarPorSecciones products={products} user={user} />
  )
}

function CargarPorSecciones({ products, user}) {

  return (
    <>
      {
        SECCIONES.map((seccion, index) => (
          <div key={index} className='mt-5'>
            <h2 className='h1 ps-4 border-start border-black fw-bolder mb-5 border-success'>{seccion}</h2>
            <ProductCarousel products={products.slice(0, 10)} user={user} />
          </div>
        ))
      }
    </>
  )
}
