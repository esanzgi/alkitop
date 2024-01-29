// resources/js/Pages/Admin.jsx

import React from 'react';
import { Header } from '@/components/Header';
import AdminMenu from '@/components/AdminMenu';


const Admin = ({ users }) => {
  return (
    <div>
      <Header />
      <AdminMenu/>
      <h1 className="text-center pt-3 mb-1">ADMIN PANEL</h1>
      <h3 className="text-center pt-1 mb-5" >Manage users</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id_user}>
              <td>{user.id_user}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.id_role}</td>
              <td>
                <form action="/admin/users/edit">
                  <input type="hidden" id="user_id" name='user_id' value={user.id_user} />
                  <input type="submit" className="btn btn-primary" value="Edit" />
                </form>
              </td>
              <td>
                <form action="/admin/users/delete">
                  <input type="hidden" id="user_id" name="user_id" value={user.id_user} />
                  <input type="submit" className="btn btn-danger" value="Delete" />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
