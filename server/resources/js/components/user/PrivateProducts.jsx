  import { PrivateProductCard } from './PrivateProductCard'

  import PRODUCT_NOT_FOUND from '../../assets/images/product_not_found.png'

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
      <div className='row justify-content-center'>

        {products.map((product, index) => (
          <div key={index} className='col-10 col-sm-6 col-md-4 col-lg-3 g-5 product'>
            <PrivateProductCard
              product={product}
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
            <img
              src={PRODUCT_NOT_FOUND}
              alt="product-not-found"
              className="img-fluid "
            />
          </div>
        </div>
      </div>
    );
  };
