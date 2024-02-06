import React, { useState, useEffect } from "react";
import { Products } from "../Products";

export default function GustokoenProduktuak({ user }) {
  const [produktuJabea, setProduktuJabea] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayType, setDisplayType] = useState("all");

  useEffect(() => {
    const fetchUserProducts = async () => {
      try {
        const response = await fetch(`/api/products/favourites/user/${user.id_user}`);
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
        <p className="text-center h4 p-4">
          Ez dituzu produkturik gorde. Anima zaitez!
        </p>
      </div>
    ) : (
      <div className="d-flex flex-column">
        <h1 className="align-self-center">Gustoko dituzun produktuak</h1>
        <Products products={produktuJabea}/>
      </div>
    )}
  </div>
  );
}
