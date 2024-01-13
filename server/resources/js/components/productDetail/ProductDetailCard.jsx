import { faStar, faLocation, faLocationDot, faLeaf, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'
import { AlkitopTooltip, NextArrow, PrevArrow } from '../Icons'
import RatingStars from 'react-rating-stars-component';



export function ProductDetailCard({ product }) {
  const avgRatingValue = product.avgRating.length > 0 ? parseFloat(product.avgRating[0].avg_rating) : 0;

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
        <AlkitopTooltip text='Handitu'>
          <img
            className='img-fluid rounded-4 object-fit-cover product'
            src={product.product.image || product.product.images}
            alt={product.product.name || product.product.title}
          />
        </AlkitopTooltip>
        

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
          <FontAwesomeIcon className='text-success' icon={faLocationDot} />
          <span className='fs-6 fst-italic ms-2'>{product.product.location}</span>
        </div>

      </div>


      <div className='col-8 d-flex flex-column justify-content-between'>
        <div className='d-flex justify-content-between flex-column '>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fs-4 me-1 fw-bold'>
              {product.product.price}€ <span className='font-normal'>/ Eguna</span>
            </span>

            {
              product.product.isEco === 1 && (
                <span className='d-flex fst-italic'>
                  <FontAwesomeIcon className='me-2 fs-4 text-success' icon={faLeaf} />
                  ECO Produktua
                </span>
              )
            }
          </div>
          
          <div className='mt-4'>
            <p className='fs-5'>{product.product.description}</p>
            
          </div>
        </div>

        

        <div className="mt-3 mb-5 d-flex justify-content-end me-5 pb-5 align-items-center">
          <button className="btn btn-success me-3 px-5 fs-5 ">Alokatu</button>
          <button className="btn btn-outline-success me-3 fs-5"><span className='me-1'>Chat</span> <FontAwesomeIcon icon={faComment}/></button>
          <span className='pointer-at'><FontAwesomeIcon className='fs-2' icon={faBookmark}/></span>
           
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard


