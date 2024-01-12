
import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Products } from '@/components/Products'
import FiltroProductos from '@/components/FiltroProductos'
import { useState, useEffect } from 'react'
import { useProducts } from '@/hooks/useProducts'
import { Loading } from '@/components/Loading'
import { FiltrarBtn } from '@/components/Icons'


function ProductsPage({ search, page}) {
    const { products, getProducts, loading,setPage } = useProducts({ searchProd: search })
    const [showFiltersModal, setShowFiltersModal] = useState(false);

    useEffect(() => {
        getProducts({ search: search })
    }, [getProducts])


    const handleOpenFiltersModal = () => {
        setShowFiltersModal(true);
    };

    const handleCloseFiltersModal = () => {
        setShowFiltersModal(false);
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
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

                {/* {loading ? <Loading /> : (
                    <div>
                        <Products products={products} />
                    </div>
                )} */}
                
                {loading ? <Loading /> : (
                    <div>
                    <Products products={products} />
                    <button onClick={handleLoadMore} disabled={loading}>
                        Cargar más
                    </button>
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
