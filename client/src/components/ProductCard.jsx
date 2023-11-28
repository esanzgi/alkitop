import { faLeaf, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IMAGE from '../assets/images/moto.jpg'
import IMAGE2 from '../assets/images/moto2.jpg'

export function ProductCard ({ productImg, productTitle, productDescr, productPrice, productRate, isEco }) {
  isEco ? productImg = IMAGE2 : productImg = IMAGE

  return (
    <div className=''>
      {
        !isEco && (
          <span className='badge bg-success position-absolute top-0 rounded d-inline-flex align-middle'><FontAwesomeIcon icon={faLeaf} className='me-1' />ECO</span>

        )
      }

      <div className='col-12 text-center shadow-sm '>
        <img
          src={productImg}
          alt={productTitle}
          className='img-fluid object-fit-cover mx-auto rounded-3 shadow-sm'
          style={{ height: '250px' }}
        />
      </div>
      <div className='mt-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='fw-semibold'>
            <span className='fs-6 me-1'>
              {productPrice}€
            </span>
            día
          </div>
          <span>
            <FontAwesomeIcon className='me-1' icon={faStar} />
            {productRate}
          </span>
        </div>
        <p className='text-truncate mt-2'>{productTitle}</p>
      </div>
    </div>
  )
}
