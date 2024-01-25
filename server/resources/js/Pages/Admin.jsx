// resources/js/Pages/Admin.jsx

import React from 'react';
import { Header } from '@/components/Header';
import AdminCard from '@/components/AdminCard';



const Admin = ({ users }) => {
  return (
    <div>
      <Header />

      <h1 className="text-center pt-3 mb-1">ADMIN PANEL</h1>
      <h3 className="text-center pt-1 mb-5" ></h3>

      <div className='d-flex'>
        <AdminCard  title={"Erabiltzaielak editau"} url={"/admin/users"} />
        <AdminCard  title={"Produktuak editau"} url={"/admin/produktuak"} />
        <AdminCard  title={"Iritziak editau"} url={"/admin/iritziak"} />
        <AdminCard  title={"Rolak editau"} url={"/admin/rolak"} />
      </div>

    </div>
  );
};

export default Admin;
