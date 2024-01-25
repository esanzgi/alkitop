import React from 'react';
import { Header } from '@/components/Header';
import AdminMenu from '@/components/AdminMenu';

const Admin = ({ products }) => {
  return (
    <div>
      <Header />
      <AdminMenu />
      <h1 className="text-center pt-3 mb-1">ADMIN PANEL</h1>
      <h3 className="text-center pt-1 mb-5">Manage products</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Owner ID</th>
            <th>Price</th>
            <th>Frequency</th>
            <th>Location</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id_product}>
              <td>{product.id_product}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.id_owner}</td>
              <td>{product.price}</td>
              <td>{product.frequency}</td>
              <td>{product.location}</td>
              <td>{product.category}</td>
              <td>
                <form action="">
                  <input type="hidden" id="product_id" value={product.id_product} />
                  <input type="submit" className="btn btn-primary" value="Edit" />
                </form>
              </td>
              <td>
                <form action="admin/delete" method="post">
                  <input type="hidden" id="product_id" name="product_id" value={product.id_product} />
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
