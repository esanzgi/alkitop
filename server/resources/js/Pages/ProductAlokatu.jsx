import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useUserContext } from '@/context/userContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css';

function ProductAlokatu({ user, owner, product }) {
  const { loggedUser, login, logout } = useUserContext();
  login(user);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <div className='fixed-top bg-white'>
        <Header user={user} owner={owner} />
      </div>

      <div className="container px-1 px-sm-5 mx-auto mt-5 pt-5">
        <h1 className='mt-3'> Produktua alokatu</h1>
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
                    onChange={(date) => setEndDate(date)}
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
        <h2>Prezioa:</h2>
        <label>0€</label>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <form>
          <input type='submit' name="alokatu" value="Alokatu" className='btn btn-success'/>
        </form>
      </div>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ProductAlokatu;
