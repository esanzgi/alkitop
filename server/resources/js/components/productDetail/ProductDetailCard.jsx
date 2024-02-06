// ProductDetailCard.js

import React, { useState, useEffect } from 'react';
import { faStar, faLocationDot, faLeaf, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlkitopTooltip } from '../Icons';
import RatingStars from 'react-rating-stars-component';
import ImagesModal from './ImagesModal';
import { PUBLIC_IMAGES_URL, traducirFrecuencia } from '@/assets/utils/constants';
import { useForm } from 'react-hook-form';
import MapComponent from '../MapComponent';
import ChatModal from '../ChatModal';

function ProductDetailCard({ product, user, owner }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAvailableForRental, setIsAvailableForRental] = useState(checkAvailability(product.latestRental));
  const [isFavorite, setIsFavorite] = useState(false);


  const avgRatingValue = product.avgRating.length > 0 ? parseFloat(product.avgRating[0].avg_rating) : 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openChatModal = () => {
    setIsChatModalOpen(true);
  };

  const closeChatModal = () => {
    setIsChatModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleBookmarkClick = async () => {
    try {
      if (!user) {
        window.location.href = '/login';
        return;
      }

      const response = await fetch('/addFavourite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id_user,
          product_id: product.product.id_product,
        }),
      });

      if (response.ok) {
        setIsFavorite(!isFavorite);
      } else {
        console.error('Error al agregar el producto a favoritos');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud', error);
    }
  };

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        if (user) {
          const response = await fetch('/checkFavorite', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id: user.id_user,
              product_id: product.product.id_product,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            setIsFavorite(data.isFavorite);
          } else {
            console.error('Error al verificar el estado del favorito');
          }
        }
      } catch (error) {
        console.error('Error al realizar la solicitud', error);
      }
    };

    checkFavoriteStatus();
  }, [user, product.product.id_product]);

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
          <RatingStars value={avgRatingValue} size={24} activeColor="#ffd700" edit={false} />
        </div>
        <div className='ps-2 mt-2'>
          <FontAwesomeIcon className='text-success' icon={faLocationDot} />
          <span className='fs-6 fst-italic ms-2' onMouseEnter={handleMouseEnter}>
            {product.product.location}
          </span>
          {isHovered && (
            <div style={{ position: 'absolute', zIndex: 999, width: '50%', height: '200px' }} onMouseLeave={handleMouseLeave}>
              <MapComponent location={product.product.location} />
            </div>
          )}
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
            <input type='hidden' name='product' value={product.product.id_product} />
            <input
              type='submit'
              className="btn btn-success me-3 px-5 fs-5"
              disabled={!isAvailableForRental}
              value="Alokatu"
            />
          </form>

          <button className="btn btn-outline-success me-3 fs-5" onClick={openChatModal}>
            <span className='me-1'>Chat</span> <FontAwesomeIcon icon={faComment} />
          </button>
        <ChatModal isOpen={isChatModalOpen} onClose={closeChatModal} user={user} owner={owner}/>

          <span className='pointer-at' onClick={handleBookmarkClick}>
            <FontAwesomeIcon className={`fs-2 ${isFavorite ? 'text-black' : 'text-muted'}`} icon={faBookmark} />
          </span>
        </div>
      </div>

    </div>
  );
}

function checkAvailability(latestRental) {
  return !latestRental || latestRental.status === 'Finalizado';
}

export default ProductDetailCard;
