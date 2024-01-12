import { faLeaf, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IMAGE from '../assets/images/moto.jpg'
import IMAGE2 from '../assets/images/moto2.jpg'
import { useForm } from '@inertiajs/react'

export function ProductCard({ product, user }) {
  console.log(user && user.id_user);
  console.log('Product image',product)
  const { get, post } = useForm()
  //product.isEco ? product.image = IMAGE2 : product.image = IMAGE

  const handleOnClick = () => {
    get(`/product/details/${product.id_product || product.id}`)
  }
  
  const addFavourite = async (e) => {
    e.preventDefault();
  
    const userId = user ? user.id_user : null;
  
    try {
      const response = await post(`/api/addFavourite/${product.id_product}`, { user_id: userId });
  
    } catch (error) {
      console.error('Produktua gordetzerakoan errorea', error);
    }
  };
  
    // var http = new XMLHttpRequest();

    // http.onreadystatechange = function () {
    //   if (http.readyState === 4) {
    //     if (http.status === 200) {
    //       console.log(JSON.parse(http.responseText).message);
    //     } else {
    //       console.error(JSON.parse(http.responseText).error);
    //     }
    //   }
    // };
    // http.open('POST', `/api/addFavourite/${product.id_product}`,true);
    // http.send();
  //};



  return (
    <div className='' onClick={handleOnClick}>
      {
        product.isEco === 1 && (
          <span className='badge bg-success position-absolute top-0 rounded d-inline-flex align-middle'><FontAwesomeIcon icon={faLeaf} className='me-1' />ECO</span>
        )
      }

      <div className='col-12 text-center shadow-sm '>
        <img
          src={product.image}
          alt={product.title || product.name}
          className='img-fluid object-fit-cover mx-auto rounded-3 shadow-sm'
          style={{ height: '250px' }}
        />
      </div>
      <div className='mt-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='fw-semibold'>
            <span className='fs-6 me-1'>
              {product.price}€
            </span>
            día
          </div>
          <span>
            <FontAwesomeIcon className='me-1' icon={faStar} />
            {product.rate || product.avg_rating}
          </span>
        </div>
        <div className='d-flex justify-content-between'>
          <p className='text-truncate mt-2'>{product.title || product.name}</p>
          <form onSubmit={addFavourite}>
            <input type='hidden' value={user ? user.id_user : ''} name='user_id' />
            <button type="submit" className='btn btn-link'>
              <FontAwesomeIcon className=' mt-3' icon={faHeart} />
            </button>
          </form>


        </div>
      </div>
    </div>
  )
}

