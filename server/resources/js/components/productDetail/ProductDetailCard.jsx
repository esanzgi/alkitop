import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../Icons'
import RatingStars from 'react-rating-stars-component';
import { useRatings } from '@/hooks/useRatings';
import { useEffect } from 'react';


export function ProductDetailCard({ product }) {
  const { avg, getAvgRatingByProduct } = useRatings()

  useEffect(() => {
    getAvgRatingByProduct(product.product.id_product)
  }, [getAvgRatingByProduct])

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
  console.log('AVG --> ', avg)
  return (
    <>
      <div className='col-4 text-center rounded object-'>

        {/* <Slider {...settings}>
          {product.image.map((prodImg, index) => (
            <div key={index} className='d-flex justify-content-center'>
              <div className='col-5 product'>
                <img
                  src={product.image}
                  alt={product.title || product.name}
                  className='img-fluid object-fit-contain mx-auto'
                  style={{ height: '300px' }}
                />
              </div>
            </div>
          ))}
        </Slider> */}

        <img
          className='img-fluid rounded-4 object-fit-cover product'
          src={product.product.image || product.product.images}
          alt={product.product.name || product.product.title}
        />

        <div>
          <RatingStars
            value={avg}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
      </div>

      <div className='mt-3 col-12'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='fw-semibold'>
            <span className='fs-6 me-1'>
              {product.product.price}€
            </span>
            día
          </div>
          <span>
            <FontAwesomeIcon className='me-1' icon={faStar} />
            {product.product.rate}
          </span>
        </div>
        <p className='text-truncate mt-2'>{product.product.title || product.product.name}</p>
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
