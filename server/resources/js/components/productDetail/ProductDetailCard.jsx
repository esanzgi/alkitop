import React, { useState } from 'react';
import { faStar, faLocationDot, faLeaf, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlkitopTooltip } from '../Icons';
import RatingStars from 'react-rating-stars-component';
import ImagesModal from './ImagesModal';
import { PUBLIC_IMAGES_URL, traducirFrecuencia } from '@/assets/utils/constants';
import { useForm } from 'react-hook-form';

function ProductDetailCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvailableForRental, setIsAvailableForRental] = useState(checkAvailability(product.latestRental));

  const avgRatingValue = product.avgRating.length > 0 ? parseFloat(product.avgRating[0].avg_rating) : 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='row justify-content-center'>
      <div className='col-10 col-sm-8 col-md-4'>
        <AlkitopTooltip text='Handitu'>
          <img
            className='img-fluid rounded-4 object-fit-cover product'
            src={PUBLIC_IMAGES_URL + product.product.images[0].image_path}
            alt={product.product.name || product.product.title}
            onClick={openModal}
          />
        </AlkitopTooltip>

        <ImagesModal isOpen={isModalOpen} onClose={closeModal} images={product.product.images} />

        <div className='d-flex flex-wrap justify-content-between align-items-center pe-2 ps-2 mt-2'>
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

      <div className='col-10 col-md-8 d-flex flex-column justify-content-between mt-5 mt-md-0'>
        <div className='d-flex justify-content-between flex-column '>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fs-4 me-1 fw-bold'>
              {product.product.price}€ <span className='font-normal'>/ {traducirFrecuencia(product.product.frequency)}</span>
            </span>
            {product.product.isEco === 1 && (
              <span className='d-flex fst-italic'>
                <FontAwesomeIcon className='me-2 fs-4 text-success' icon={faLeaf} />
                ECO Produktua
              </span>
            )}
          </div>

          <div className='mt-4'>
            <p className='fs-5'>{product.product.description}</p>
          </div>
        </div>

        <div className="mt-3 mb-2 md-mb-5 d-flex justify-content-center  me-5 pb-5 align-items-center">
          <form action='/ProductAlokatu' method='get'>
            <input type='hidden' name='product' value={product.product.id_product}/>
          <input
            type='submit'
            className="btn btn-success me-3 px-5 fs-5"
            disabled={!isAvailableForRental}
            value="Alokatu"
          />
          </form>
          
          <button className="btn btn-outline-success me-3 fs-5"><span className='me-1'>Chat</span> <FontAwesomeIcon icon={faComment} /></button>
          <span className='pointer-at'><FontAwesomeIcon className='fs-2' icon={faBookmark} /></span>
        </div>
      </div>
    </div>
  );
}

function checkAvailability(latestRental) {
  return !latestRental || latestRental.status === "Finalizado";
}

export default ProductDetailCard;
