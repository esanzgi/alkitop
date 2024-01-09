import { ProductCard } from './ProductCard'

import PRODUCT_NOT_FOUND from '../assets/images/product_not_found.png'

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

const NoProductsResults = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h3>No se encontraron productos para esta búsqueda</h3>

          <img
            src={PRODUCT_NOT_FOUND} // Reemplaza esto con una imagen apropiada
            alt="product-not-found"
            className="img-fluid "
          />
        </div>
      </div>
    </div>
  );
};
