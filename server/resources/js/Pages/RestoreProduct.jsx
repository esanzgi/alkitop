import AdminMenu from '@/components/AdminMenu'
import { Header } from '@/components/Header'
import React, { useEffect } from 'react';
import { useUserContext } from '@/context/userContext'

export default function RestoreProduct({user,products}) {
  const { login } = useUserContext()

  useEffect(() => {
    login(user)
  }, [])
  login(user)

  return (
    <div>
      <Header user={user}></Header>
      <AdminMenu></AdminMenu>

      <table className="table table-striped">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>description</th>
          <th>isEco</th>
          <th>location</th>
        </tr>
        {
          products.map((product)=>(
            <tr>
              <td >{product.id_product}</td>
              <td >{product.name}</td>
              <td >{product.description}</td>
              <td >{product.isEco}</td>
              <td >{product.location}</td>

              <td>
                <form action='/admin/produktuak/berreskuratu' method="post">
                  <input type='hidden' value={product.id_product} name='id_product' />
                  <input type="submit" value="Berreskuratu" />
                </form>
              </td>
            </tr>
          )
      
          )
        }
      </table>      
    </div>
  )
}
