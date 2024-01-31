import { Header } from '@/components/Header';
import React from 'react';

export default function ManageRole({ users }) {
  return (
    <div>
      <Header />
      <h1 className="text-center pt-3 mb-1">ADMIN PANEL</h1>
      <h3 className="text-center pt-1 mb-5">Rolak kudeatu</h3>


      <form className="mb-3 w-75 m-auto " action='/admin/rolak/update' method="post">
        <div className="form-group">
          <label htmlFor="userSelect">Aukeratu erabiltzailea:</label>
          <select className="form-control" id="userId" name="userId">
            {users.map((user) => (
              <option value={user.id_user}>{user.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="roleSelect">Aukeratu rola:</label>
          <select className="form-control" id="role" name="role">
            <option value="1">Administradorea</option>
            <option value="2">Moderatzailea</option>
            <option value="3">Erabiltzaile arrunta</option>
            <option value="4">Jabea</option>
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Aldatu</button>
      </form>
    </div>
  );
}
