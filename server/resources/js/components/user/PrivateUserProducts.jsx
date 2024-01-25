import React, { useState, useEffect } from "react";
import ProductCarousel from "../ProductCarousel";

function PrivateUserProducts({ user }) {
  const [produktuJabea, setProduktuJabea] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(`/api/products/user/${user.id_user}`);
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

    fetchUserProducts();
  }, [user.id_user]);

  return (
    <div className="w-full">
      {loading ? (
        <p>Produktuak kargatzen...</p>
      ) : produktuJabea.length === 0 ? (
        <div>
          <p className="text-center h4 p-4">Ez dituzu produkturik alokairuan. Anima zaitez!</p>
        </div>
      ) : (
        <ProductCarousel products={produktuJabea} />
      )}
    </div>
  );
}

export default PrivateUserProducts;
