import { PrivateProductCard } from './PrivateProductCard'


export function PrivateProducts({ products }) {
  const hasProducts = products?.length > 0
  return (
    hasProducts
      ? <ListOfProducts products={products} />
      : <NoProductsResults />
  )
}

function ListOfProducts({ products }) {
  return (
    <div className='flex-column d-flex justify-content-center align-items-center'>
      <h1>ZURE PRODUKTUAK</h1>

      <div className='row justify-content-center'>

        {products.map((product, index) => (
          <div key={index} className='col-10 col-sm-6 col-md-4 col-lg-3 g-5 product'>
            <PrivateProductCard
              product={product}
            />
          </div>

        ))}
      </div>
    </div>
  )
}


