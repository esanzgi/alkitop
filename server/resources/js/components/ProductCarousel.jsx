import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ProductCard } from './ProductCard'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductCarousel = ({ products }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow style={{ backgroundColor: 'black' }} />,
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
    <div className='row justify-content-center'>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className='d-flex justify-content-center'>
            <div className='col-10 product'>
              <ProductCard
                productImg={product.image}
                productTitle={product.name}
                productDescr={product.description}
                productPrice={product.price}
                productRate={product.avg_rating}
                isEco={product.isEco}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>

  )
}

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
    </div>
  )
}

export default ProductCarousel
