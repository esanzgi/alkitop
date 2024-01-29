import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ProductCard } from './ProductCard';


import { NextArrow, PrevArrow } from './Icons';

const ProductCarousel = ({ products, user }) => {

  console.log('CAROUSEL PRODUCTs', products)


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='row justify-content-center'>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className='d-flex justify-content-center'>
            <div className='col-10 product'>
              <ProductCard
                product={product}
                user={user}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
