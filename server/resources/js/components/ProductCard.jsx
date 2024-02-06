import { faLeaf, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IMAGE from '../assets/images/moto.jpg'
import IMAGE2 from '../assets/images/moto2.jpg'
import { useForm } from '@inertiajs/react';
import { PUBLIC_IMAGES_URL, traducirFrecuencia } from '@/assets/utils/constants';
import { useEffect } from 'react';

export function ProductCard({ product, user }) {
  const { get} = useForm();

  const handleOnClick = () => {
    get(`/product/details/${product.id_product || product.id}`);
  };

  const addFavourite = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('/addFavourite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id_user,
          product_id: product.id_product,
        }),
      });

      if (response.ok) {
        console.log('Favorito añadido correctamente');
      } else {
        console.error('Error al añadir favorito');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  
  return (
    <div className='' onClick={handleOnClick}>
      {
        product.isEco === 1 && (
          <span className='badge bg-success position-absolute top-0 rounded d-inline-flex align-middle'><FontAwesomeIcon icon={faLeaf} className='me-1' />ECO</span>
        )
      }

      <div className='col-12 text-center shadow-sm '>
        <img
          src={PUBLIC_IMAGES_URL + product.image_path}
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
            {traducirFrecuencia(product.frequency)}
          </div>
          <span>
            <FontAwesomeIcon className='me-1' icon={faStar} />
            {product.rate || product.avg_rating}
          </span>
        </div>
        <div className='d-flex justify-content-between'>
          <p className='text-truncate mt-2'>{product.title || product.name}</p>
          <form onSubmit={addFavourite}>
        <input type='hidden' value={product.id_product} name='product_id' />
        <button type="submit" className='btn btn-link'>
          <FontAwesomeIcon className=' mt-3' icon={faHeart} />
        </button>
      </form>


        </div>
      </div>
    </div>
  )
}
