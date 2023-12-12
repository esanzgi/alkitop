import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'

export function ProductDetailCard ({ product }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      <div className='col-4 text-center  rounded shadow-sm'>

        <Slider {...settings}>
          {product.image.map((prodImg, index) => (
            <div key={index} className='d-flex justify-content-center'>
              <div className='col-5 product'>
                <img
                  src={prodImg}
                  alt={product.title}
                  className='img-fluid object-fit-contain mx-auto'
                  style={{ height: '300px' }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='mt-3 col-12'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='fw-semibold'>
            <span className='fs-6 me-1'>
              {product.price}€
            </span>
            día
          </div>
          <span>
            <FontAwesomeIcon className='me-1' icon={faStar} />
            {product.rating.rate}
          </span>
        </div>
        <p className='text-truncate mt-2'>{product.title}</p>
      </div>

    </>
  )
}

// <div className='mt-3'>
//   <div className='d-flex justify-content-between align-items-center'>
//     <div className='fw-semibold'>
//       <span className='fs-6 me-1'>
//         {product.price}€
//       </span>
//       día
//     </div>
//     <span>
//       <FontAwesomeIcon className='me-1' icon={faStar} />
//       {product.rating.rate}
//     </span>
//   </div>
//   <p className='text-truncate mt-2'>{product.title}</p>
// </div>
