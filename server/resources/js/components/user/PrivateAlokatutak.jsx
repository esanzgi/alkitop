import React, { useState, useEffect } from "react";
import { Products } from "../Products";

function PrivateAlokatutak({ user }) {
  const [produktuJabea, setProduktuJabea] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayType, setDisplayType] = useState("all");
  const [showOldProducts, setShowOldProducts] = useState(false);

  const fetchUserProducts = async () => {
    try {
      const response = await fetch(`/api/products/rental/user/${user.id_user}`);
      if (!response.ok) {
        throw new Error(
          `Error al cargar productos del usuario. Código HTTP: ${response.status}`
        );
      }

      const data = await response.json();
      setProduktuJabea(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOldUserProducts = async () => {
    try {
      const response = await fetch(`/api/products/old/rental/user/${user.id_user}`);
      if (!response.ok) {
        throw new Error(
          `Error al cargar productos viejos del usuario. Código HTTP: ${response.status}`
        );
      }

      const data = await response.json();
      setProduktuJabea(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (showOldProducts) {
      fetchOldUserProducts();
    } else {
      fetchUserProducts();
    }
  }, [user.id_user, showOldProducts]);

  const handleCheckboxChange = () => {
    setShowOldProducts(!showOldProducts);
  };

  return (
    <div className="w-full">
      {loading ? (
        <p>Produktuak kargatzen...</p>
      ) : produktuJabea.length === 0 ? (
        <div>
          <p className="text-center h4 p-4">
            Ez zaude produkturik alokatzen momentu honetan. Anima zaitez!
          </p>
        </div>
      ) : (
        <div className="px-5 d-flex flex-column ">
         <h1 className="text-center">Alokatzen zauden produktuak</h1>

          <div className="align-self-start">
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={showOldProducts}
          />
          <label className="mx-2">Alokatu dituzun produktuak ere ikusi</label>
          </div>
         
          <Products products={produktuJabea} />
        </div>
      )}
    </div>
  );
}

export default PrivateAlokatutak;
