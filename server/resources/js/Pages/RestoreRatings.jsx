import AdminMenu from '@/components/AdminMenu';
import { Header } from '@/components/Header';
import React, { useEffect } from 'react'
import { useUserContext } from '@/context/userContext'

export default function RestoreRatings({user,ratings}) {
  const { login } = useUserContext()

  useEffect(() => {
    login(user)
  }, [])
  login(user)

  return (
    <div>
      <Header user={user}/>
      <AdminMenu/>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">User ID</th>
            <th scope="col">Product ID</th>
            <th scope="col">Title</th>
            <th scope="col">Review</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map((rate) => (
            <tr key={rate.id}>
              <td>{rate.id_user}</td>
              <td>{rate.id_rating}</td>
              <td>{rate.title}</td>
              <td>{rate.review}</td>
              <td>{rate.rating}</td>

              <td>
                <form action="/admin/iritziak/restore" method="post">
                  <input type="hidden" id="id_rating" name="id_rating" value={rate.id_rating} />
                  <input type="submit" className="btn btn-success " value="Berreskuratu" />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
