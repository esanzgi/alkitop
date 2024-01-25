import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Footer } from '@/components/Footer';
import { GustokoenProduktuak } from '@/components/GustokoenProduktuak';
import { Header } from '@/components/Header';
import PrivateUserProducts from '@/components/user/PrivateUserProducts';
import { useUserContext } from '@/context/userContext';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, products }) {
    const { login } = useUserContext()
    login(auth.user)



    return (
        <div>
            <div className='fixed-top bg-white'>
                <Header user={auth.user} owner={auth.user} />
            </div>

            <div className="py-12 mt-5 pt-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-2 text-gray-900 mx-3 h3">Mila esker izen emateagatik</div>
                    </div>
                </div>
            </div>

            {auth.user.id_role === 4 && (
                <div>
                    <div className='d-flex justify-content-center my-4'>
                        <h1 className='mb-2 px-4'>Zure produktuak</h1>
                    </div>
                    <hr />

                    <div className='d-flex flex-column mt-4 w-auto'>
                        <PrivateUserProducts user={auth.user} />
                    </div>
                    <hr /> 
                </div>
            )}


            {/* {products ? (
                <GustokoenProduktuak products={products} />
            ) : (
                <div className="text-red-600 mx-3 my-4 d-flex justify-content-center">
                    <h4>Ez dituzu gordetako produkturik</h4>
                </div>
            )} */}

            <div className='mt-5 pt-5 bg-light border-top'>
                <div className='container-md'>
                    <Footer />
                </div>
            </div>
        </div>

    );
}
