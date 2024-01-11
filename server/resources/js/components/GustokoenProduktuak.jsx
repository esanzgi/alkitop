import ProductCarousel from './ProductCarousel'

export function GustokoenProduktuak ({products}) {
  return (
    <>
    <div className='d-flex justify-content-center my-5'>
      <div className=' col-9 mt-4'>
        <h1 className='mb-4'>Zure gustokoen produktuak</h1>
        <ProductCarousel products={products.slice(0, 10)} />
      </div>
    </div>
    
    </>
  )
}
