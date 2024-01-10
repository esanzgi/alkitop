import { faLeaf, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IMAGE from '../assets/images/moto.jpg'
import IMAGE2 from '../assets/images/moto2.jpg'
import { useForm } from '@inertiajs/react'

export function ProductCard({ product }) {
  const { get } = useForm()
  product.isEco ? product.image = IMAGE2 : product.image = IMAGE

  const handleOnClick = () => {
    get(`/product/details/${product.id_product || product.id}`)
  }

  return (
    <div className='' onClick={handleOnClick}>
      {
        !product.isEco && (
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
        <p className='text-truncate mt-2'>{product.title || product.name}</p>
      </div>
    </div>
  )
}
