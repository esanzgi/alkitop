
import React from 'react'
import { FilterNav } from '../components/FilterNav'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Products } from '@/components/Products'
import FiltroProductos from '@/components/FiltroProductos'
import { useState } from 'react'

const FiltrarBtn = ({ handleOpenModal }) => {
    return (
        <div className='btn btn-success' style={{ display: 'flex', alignItems: 'center' }} onClick={handleOpenModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="16" width="16" stroke="currentcolor" strokeWidth="3" fill="none" style={{ overflow: 'visible' }}>
                <path d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path>
            </svg>
            <span className='ms-2'>Filtros</span>
        </div>
    );
};


function ProductsPage({ products, search }) {
    const [showFiltersModal, setShowFiltersModal] = useState(false);

    const handleOpenFiltersModal = () => {
        setShowFiltersModal(true);
    };

    const handleCloseFiltersModal = () => {
        setShowFiltersModal(false);
    };

    return (
        <main className=''>
            <div className='fixed-top bg-white'>
                <Header />
            </div>

            <div className='home-content container pb-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='fs-2'>Resultados para la búsqueda: <strong className='fst-italic'>{search}</strong></span>
                    <FiltrarBtn handleOpenModal={handleOpenFiltersModal} />
                </div>

                <Products products={products} />
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
