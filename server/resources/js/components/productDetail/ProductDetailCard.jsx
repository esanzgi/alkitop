import { faStar, faLocation, faLocationDot, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../Icons'
import RatingStars from 'react-rating-stars-component';



export function ProductDetailCard({ product }) {
  const avgRatingValue = product.avgRating.length > 0 ? parseFloat(product.avgRating[0].avg_rating) : 0;

  console.log(product)

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
  return (
    <div className='row'>
      <div className='col-4'>

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

        <div className='d-flex justify-content-between align-items-center pe-2 ps-2 mt-2'>
          <span className='fs-4'>{product.product.name || product.product.title}</span>
          <span className='badge bg-secondary px-3 fs-7'>{product.product.category}</span>
        </div>
        <div className='ps-2'>
          <RatingStars
            value={avgRatingValue}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <div className='ps-2 mt-2'>
          <FontAwesomeIcon className='text-success' icon={faLocationDot}/>
          <span className='fs-6 fst-italic ms-2'>{product.product.location}</span>
        </div>

      </div>


      <div className=' col-8'>
        <div className='d-flex justify-content-between align-items-center'>
          <span className='fs-4 me-1 fw-bold'>
            {product.product.price}€ <span className='font-normal'>/ Eguna</span>
          </span> 

          {
            product.product.isEco === 1 && (
              <span className='d-flex fst-italic'>
                <FontAwesomeIcon className='me-2 fs-4 text-success' icon={faLeaf} />
                ECO
              </span>
            )
          }
        </div>

        <div className='mt-3'>
          {product.product.description}
        </div>
        {/* <p className='text-truncate mt-2'>{product.product.title || product.product.name}</p> */}
      </div>
    </div>
  )
}

export default ProductDetailCard
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


