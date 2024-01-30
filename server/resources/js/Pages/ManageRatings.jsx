import AdminMenu from '@/components/AdminMenu';
import { Header } from '@/components/Header';
import React from 'react';

export default function ManageRatings({ ratings , users}) {
  return (
    <div>
      <Header/>
      <AdminMenu/>

      <h1 className="text-center pt-3 mb-1">ADMIN PANEL</h1>
      <h3 className="text-center pt-1 mb-5">Iritziak kudeatu</h3>

      {/* <form action="">
        <select name="" id="">
          <option value="">--Aukeratu erabiltzaile bat--</option>

          
        </select>
        <input type="text" defaultValue={""}/>
        <input type="text" defaultValue={""}/>
        <input type="submit" value="Bilatu" />
      </form> */}

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
                <form action="/admin/iritziak/edit" method='get'>
                  <input type="hidden" id="id_rating" name='id_rating' value={rate.id_rating} />
                  <input type="submit" className="btn btn-primary" value="Edit" />
                </form>
              </td>
              <td>
                <form action="/admin/iritziak/delete" method="post">
                  <input type="hidden" id="id_rating" name="id_rating" value={rate.id_rating} />
                  <input type="submit" className="btn btn-danger" value="Delete" />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
