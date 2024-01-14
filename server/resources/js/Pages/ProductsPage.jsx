import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Products } from '@/components/Products';
import FiltroProductos from '@/components/FiltroProductos';
import { Loading } from '@/components/Loading';
import { FiltrarBtn } from '@/components/Icons';
import { useProductsPaginate } from '@/hooks/useProductsPaginate';

function ProductsPage({ search, page }) {
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  console.log('INITIAL PAGE VALUE', page)
  const { loading, products, currentPage, totalPages, loadNextPage } = useProductsPaginate(search, 1)
  console.log('LAZY', products)

  const handleOpenFiltersModal = () => {
    setShowFiltersModal(true);
  };

  const handleCloseFiltersModal = () => {
    setShowFiltersModal(false);
  };

  const handleLoadMore = () => {
    loadNextPage(); 
  };

  return (
    <main className=''>
      <div className='fixed-top bg-white'>
        <Header />
      </div>

      <div className='home-content container pb-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <span className='fs-2'>
            Resultados para la búsqueda: <strong className='fst-italic'>{search}</strong>
          </span>
          <FiltrarBtn handleOpenModal={handleOpenFiltersModal} />
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div>
            <Products products={products} />
            {currentPage < totalPages && (
                <button onClick={loadNextPage} disabled={loading}>
                    Cargar más
                </button>
            )}
          </div>
        )}
      </div>

      <FiltroProductos show={showFiltersModal} handleClose={handleCloseFiltersModal} />

      <div className='mt-5 pt-5 bg-light border-top'>
        <div className='container-md'>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
