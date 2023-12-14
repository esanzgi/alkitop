import { ProductCard } from './ProductCard'

export function Products({ products }) {
  const hasProducts = products?.length > 0
  return (
    hasProducts
      ? <ListOfProducts products={products} />
      : <NoProductsResults />
  )
}

function ListOfProducts({ products }) {
  return (
    <div className='row justify-content-center'>

      {products.map((product, index) => (
        <div key={index} className='col-10 col-sm-6 col-md-4 col-lg-3 g-5 product'>
          <ProductCard
            key={product.id_product}
            productImg={product.image}
            productTitle={product.name}
            productDescr={product.description}
            productPrice={product.price}
            productRate={product.avg_rating}
          />
        </div>

      ))}
    </div>
  )
}

function NoProductsResults() {
  return (
    <p>No se encontraron productos para esta búsqueda</p>
  )
}
