import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { NextArrow, PrevArrow } from '../Icons';
import Slider from 'react-slick';

const ImagesModal = ({ isOpen, onClose, images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: []
  };

  if (!images) {
    console.log('IMAGES', images)
  }

  return (
    <Modal show={isOpen} onHide={onClose} size='lg' centered>
      <Modal.Header closeButton>
        <Modal.Title>Argazkiak</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Slider {...settings} className='my-5 mx-3 mx-md-5'>
          {images?.map((image, index) => (
            <div key={index} className=''>
              <img
                src={image.image_path}
                alt={image.image_path}
                className='img-fluid object-fit-contain mx-auto rounded-3'

              />
            </div>
          ))}
        </Slider>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' className='px-4' onClick={onClose}>
          Itxi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImagesModal;
