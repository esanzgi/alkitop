import { UserProfileCircle } from "../Icons"
import { useState, useEffect } from "react";
import ProductCarousel from "../ProductCarousel";

export const UserDetails = ({ user }) => {

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
    <div className="mt-5">
      <div className="border-bottom pb-3 d-flex justify-content-between align-items-center">
        <h1 className="h1">Perfil publikoa</h1>
        <span className="fs-4">E. Mota</span>
      </div>

      <div className="bg-light rounded-5 p-4 mt-4">
        <div className="row mt-5">
          <div className="d-flex align-items-center">
            <div>
              <UserProfileCircle user={user} width={200} height={200} enableTooltip={false} enableLink={false} />
            </div>

            <div className="ms-5">
              <h1 className="h1">{user.name}</h1>
              <p className="mt-3 fs-5">{user.bio}</p>
            </div>
          </div>

        </div>

        <div className="row justify-content-center">
          <div className="card bg-light p-4 rounded-5 col-8">
            <div className="mb-4">
              <h3 className="card-title mb-3">Información Personal</h3>
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-2 fs-6"><strong>País:</strong> {user.country}</p>
                  <p className="mb-2 fs-6"><strong>Provincia:</strong> {user.province}</p>
                  <p className="mb-2 fs-6"><strong>Ciudad:</strong> {user.city}</p>
                </div>
                <div className="col-md-6">
                  <p className="mb-2 fs-6"><strong>Fecha de Nacimiento:</strong> {user.birthdate}</p>
                  <p className="mb-2 fs-6"><strong>Género:</strong> {user.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-5 border-bottom">
        <h1 className="h1 pb-2 pt-4">Alokairuko produktuak</h1>
      </div>

      <div className="mt-5">
        <ProductCarousel products={produktuJabea} />
      </div>


      <div className="mt-5 border-bottom">
        <h1 className="h1 pb-2 pt-4">Alokatuak</h1>
      </div>


      <div className="mt-5 border-bottom">
        <h1 className="h1 pb-2 pt-4">Iritziak</h1>
      </div>
    </div>
  )
}