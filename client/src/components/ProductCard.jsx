import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ProductCard ({ productImg, productTitle, productDescr, productPrice }) {
  return (
    <div className=''>

      <div className='col-12 text-center  rounded shadow-sm'>
        <img
          src={productImg}
          alt={productTitle}
          className='img-fluid object-fit-contain mx-auto'
          style={{ height: '200px' }}
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
            4.99
          </span>
        </div>
        <p className='text-truncate mt-2'>{productTitle}</p>
      </div>
    </div>
  )
}
