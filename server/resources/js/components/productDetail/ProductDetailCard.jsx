import { faStar, faLocation, faLocationDot, faLeaf, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AlkitopTooltip, NextArrow, PrevArrow } from '../Icons'
import RatingStars from 'react-rating-stars-component';
import { useState } from 'react';
import ImagesModal from './ImagesModal';



export function ProductDetailCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const avgRatingValue = product.avgRating.length > 0 ? parseFloat(product.avgRating[0].avg_rating) : 0;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const IMAGES_PRUEBA = [
    'https://via.placeholder.com/640x480.png/0011dd?text=Oihan',
    'https://via.placeholder.com/640x480.png/0011dd?text=Eneko',
    'https://via.placeholder.com/640x480.png/0011dd?text=Hodei',
    'https://via.placeholder.com/640x480.png/0011dd?text=Jon',
  ] 


  
  return (
    <div className='row justify-content-center'>
      <div className='col-10 col-sm-8 col-md-4'>

        
        <AlkitopTooltip text='Handitu'>
          <img
            className='img-fluid rounded-4 object-fit-cover product'
            src={product.product.image || product.product.images}
            alt={product.product.name || product.product.title}
            onClick={openModal}
          />
        </AlkitopTooltip>

        <ImagesModal isOpen={isModalOpen} onClose={closeModal} images={IMAGES_PRUEBA} />
        

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


      <div className='col-10 col-md-8 d-flex flex-column justify-content-between mt-5 mt-md-0'>
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

        

        <div className="mt-3 mb-2 md-mb-5 d-flex justify-content-center  me-5 pb-5 align-items-center">
          <button className="btn btn-success me-3 px-5 fs-5 ">Alokatu</button>
          <button className="btn btn-outline-success me-3 fs-5"><span className='me-1'>Chat</span> <FontAwesomeIcon icon={faComment}/></button>
          <span className='pointer-at'><FontAwesomeIcon className='fs-2' icon={faBookmark}/></span>
           
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard


