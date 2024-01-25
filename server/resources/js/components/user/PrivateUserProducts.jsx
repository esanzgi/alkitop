import React from 'react';
import { useState, useEffect } from "react";
import ProductCarousel from "../ProductCarousel";

function PrivateUserProducts({user}) {
  const [produktuJabea, setProduktuJabea] = useState([]);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(`/api/products/user/${user.id_user}`);
        if (!response.ok) {
          throw new Error(`Error al cargar productos del usuario. Código HTTP: ${response.status}`);
        }

        const data = await response.json();
        setProduktuJabea(data); 

      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProducts();
  }, [user.idUser]);

  return (
    <div>
        <ProductCarousel products={produktuJabea}/>
    </div>
  );
}

export default PrivateUserProducts;