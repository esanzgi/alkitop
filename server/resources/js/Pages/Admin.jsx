// resources/js/Pages/Admin.jsx

import React, {useState, useEffect }from 'react';
import { Header } from '@/components/Header';
import AdminCard from '@/components/AdminCard';
import { useUserContext } from '@/context/userContext'


const Admin = ({user}) => {
  const { login } = useUserContext()

  useEffect(() => {
    login(user)
  }, [])
  login(user)

  return (
    <div>
      <Header user={user} />

      <h1 className="text-center pt-3 mb-1">ADMIN PANEL</h1>
      <h3 className="text-center pt-1 mb-5" ></h3>

      <div className='d-flex'>
        <AdminCard  title={"Erabiltzaielak editau"} url={"/admin/users"} />
        <AdminCard  title={"Produktuak editau"} url={"/admin/produktuak"} />
        <AdminCard  title={"Iritziak editau"} url={"/admin/iritziak"} />
        <AdminCard  title={"Rolak editau"} url={"/admin/rolak"} />
      </div>

      <div className='d-flex'>
        <AdminCard  title={"Erabiltzaielak berreskuratu"} url={"/admin/users/restore"} />
        <AdminCard  title={"Produktuak berreskuratu"} url={"/admin/produktuak/restore"} />
        <AdminCard  title={"Iritziak editau"} url={"/admin/iritziak/restore"} />
        <AdminCard  title={"Estatistikak"} url={"/panel"} />
      </div>

    </div>
  );
};

export default Admin;
