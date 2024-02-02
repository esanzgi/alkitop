import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useUserContext } from '@/context/userContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css';
import ImagesModal from '@/components/productDetail/ImagesModal';
import { PUBLIC_IMAGES_URL } from '@/assets/utils/constants';
import { AlkitopTooltip } from '@/components/Icons';
import { Modal, Button } from 'react-bootstrap';

function ProductAlokatu({ user, owner, product }) {
  const { loggedUser, login, logout } = useUserContext();
  const [isAlokatuModalOpen, setIsAlokatuModalOpen] = useState(false);
  const [isImagesModalOpen, setIsImagesModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [difference, setDifference] = useState(0);
  console.log(user);

  login(user);

  useEffect(() => {
    const calculateDifference = () => {
      const timeDiff = endDate.getTime() - startDate.getTime();
      let result = 0;

      switch (product.frequency) {
        case 'daily':
          result = Math.ceil(timeDiff / (1000 * 3600 * 24));
          break;
        case 'weekly':
          result = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7));
          break;
        case 'monthly':
          result = Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
          break;
        default:
          result = 0;
      }

      setDifference(result);
    };

    calculateDifference();
  }, [startDate, endDate, product.frequency]);

  const openAlokatuModal = () => {
    setIsAlokatuModalOpen(true);
  };

  const closeAlokatuModal = () => {
    setIsAlokatuModalOpen(false);
  };

  const openImagesModal = () => {
    setIsImagesModalOpen(true);
  };

  const closeImagesModal = () => {
    setIsImagesModalOpen(false);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleAlokatu = async () => {
    openAlokatuModal();
  };


  const handleSubmit = () => {
    document.getElementById('price').value = difference * product.price;
    document.getElementById('startDate').value = startDate.toISOString();
    document.getElementById('endDate').value = endDate.toISOString();
  
    document.getElementById('alokatuForm').submit();
  };
  return (
    <div>
      <div className='fixed-top bg-white'>
        <Header user={user} owner={owner} />
      </div>

      <div className="container px-1 px-sm-5 mx-auto mt-5 pt-5 d-flex flex-column">
        <h1 className='mt-3'> Produktua alokatu</h1>
        <div className='col-10 col-sm-8 col-md-4 align-self-center'>
          <AlkitopTooltip text='Handitu'>
            <img
              className='img-fluid rounded-4 object-fit-cover product'
              src={PUBLIC_IMAGES_URL + product.images[0].image_path}
              alt={product.name || product.title}
              onClick={openImagesModal}
            />
          </AlkitopTooltip>

          <ImagesModal isOpen={isImagesModalOpen} onClose={closeImagesModal} images={product.images} />
        </div>

        <form autoComplete="off" className='mt-5'>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-11">
              <div className="input-group">
                <div className="col-6">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="form-control text-left"
                  />
                  <label className="form-control-placeholder">Hasiera data</label>
                  <span className="fa fa-calendar" id="fa-1"></span>
                </div>

                <div className="col-6">
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    className="form-control text-left"
                  />
                  <label className="form-control-placeholder">Bukaera data</label>
                  <span className="fa fa-calendar" id="fa-2"></span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className='d-flex justify-content-center mt-5 flex-column align-items-center'>
        <h2>Zenbat denbora erabiliko den:</h2>
        <label>
          {difference} {product.frequency === 'monthly' ? 'hilabete' : product.frequency === 'weekly' ? 'aste' : 'egun'}
        </label>
        <h2 className='align-self-center mt-4'>Prezioa:</h2>
        <label className='align-self-center'>{difference * product.price}€</label>
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleAlokatu();
        }}>
          <input type='submit' name="alokatu" value="Alokatu" className='btn btn-success' />
        </form>
      </div>

      <Modal show={isAlokatuModalOpen} onHide={closeAlokatuModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Alokatu</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column '>
          ¿Ziur zaude {difference} {product.frequency === 'monthly' ? 'hilabete' : product.frequency === 'weekly' ? 'aste' : 'egun'} alokatu nahi duzula?
          <h2 className='align-self-center mt-4'>Prezioa:</h2>
          <label className='align-self-center'>{difference * product.price}€</label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAlokatuModal}>
            Ezeztatu
          </Button>
          <form id='alokatuForm' action='/ProductAlokatu' method='post' onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <input type='hidden' name='user' value={user.id_user} />
            <input type='hidden' name='product' value={product.id_product} />
            <input type='hidden' name='price' id='price' value='' />
            <input type='hidden' name='startDate' id='startDate' value='' />
            <input type='hidden' name='endDate' id='endDate' value='' />
            <input type='submit' value="Alokatu" className='btn btn-success' />
          </form>
        </Modal.Footer>
      </Modal>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ProductAlokatu;
