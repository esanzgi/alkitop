// ProductCarousel.jsx

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ProductCard } from './ProductCard'

const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
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
                productTitle={product.title}
                productDescr={product.description}
                productPrice={product.price}
                productRate={product.rating.rate}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>

  )
}

export default ProductCarousel
