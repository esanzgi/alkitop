import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import PrivateUserProducts from '@/components/user/PrivateUserProducts';
import PrivateAlokatutak from '@/components/user/PrivateAlokatutak';
import PrivateFavourites from '@/components/user/PrivateFavourites';
import { useUserContext } from '@/context/userContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import React, { useState } from "react";

export default function Dashboard({ auth, products, owner }) {
  const { login } = useUserContext();
  login(auth.user);

  const [displayType, setDisplayType] = useState("purchased");

  const handleMenuOptionClick = (option) => {
    setDisplayType(option);
  };

  let displayComponent;

  switch (displayType) {
    case "all":
      displayComponent = <PrivateUserProducts user={auth.user} displayType={displayType} setDisplayType={setDisplayType} />;
      break;
    case "favorites":
      displayComponent = <PrivateFavourites user={auth.user} displayType={displayType} setDisplayType={setDisplayType} />;
      break;
    case "purchased":
      displayComponent = <PrivateAlokatutak user={auth.user} displayType={displayType} setDisplayType={setDisplayType} />;
      break;
    default:
      displayComponent = null;
  }

  return (
    <div>
      <div className='fixed-top bg-white'>
        <Header user={auth.user} owner={owner} />
      </div>

      <div className="py-12 mt-5 pt-5 mx-4">
        <div className=" sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="py-2 text-gray-900 mx-3 h3">Mila esker izen emateagatik</div>
          </div>
        </div>
      </div>


      <div className='container-fluid mt-4 ms-4'>
        <div className='row'>
          <div className='col-3'>
            <DropdownButton title="Menu   " id="dropdown-menu">
              {auth.user.id_role === 4 ? (
                <>
                  <Dropdown.Item onClick={() => handleMenuOptionClick("all")}>Nire produktuak</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleMenuOptionClick("favorites")}>Gustokoenak</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleMenuOptionClick("purchased")}>Alokatutak</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item onClick={() => handleMenuOptionClick("favorites")}>Gustokoenak</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleMenuOptionClick("purchased")}>Alokatutak</Dropdown.Item>
                </>
              )}
            </DropdownButton>

          </div>
          <div className='col-12 mt-3'>
            {displayComponent}
          </div>
        </div>
      </div>

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </div>
  );
}
