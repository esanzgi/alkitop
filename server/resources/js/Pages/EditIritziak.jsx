import AdminMenu from '@/components/AdminMenu';
import { Header } from '@/components/Header';
import React, { useEffect } from 'react'
import { useUserContext } from '@/context/userContext'

export default function EditIritziak({user,rating}) {
  var rating=rating[0]
  console.log(rating.id_rating)
  const { login } = useUserContext()

  useEffect(() => {
    login(user)
  }, [])
  login(user)

  return (
    <div>
      <Header user={user}/>
      <AdminMenu/>

      <h3 className='text-center m-4 '>Iritzia editatu</h3>

      <form action="/admin/iritziak/update" class="m-4" method='get'>
        <input type="hidden" name="id" id='id' value={rating.id_rating} />
        <div class="mb-3">
            <label for="userId" class="form-label">ID de Usuario</label>
            <input type="text" class="form-control" id="userId" name="userId" defaultValue={rating.id_user} readOnly />
        </div>
        <div class="mb-3">
            <label for="productId" class="form-label">ID de Producto</label>
            <input type="text" class="form-control" id="productId" name="productId" defaultValue={rating.id_product} readOnly />
        </div>
        <div class="mb-3">
            <label for="title" class="form-label">Título</label>
            <input type="text" class="form-control" id="title" name="title" defaultValue={rating.title} />
        </div>
        <div class="mb-3">
            <label for="review" class="form-label">Reseña</label>
            <textarea class="form-control" id="review" name="review" rows="3" defaultValue={rating.review}></textarea>
        </div>
        <div class="mb-3">
            <label for="rating" class="form-label">Puntuación</label>
            <input type="text" class="form-control" id="rating" name="rating" defaultValue={rating.rating} />
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>



    </div>
  )
}
