import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Footer } from '@/components/Footer';
import { GustokoenProduktuak } from '@/components/GustokoenProduktuak';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth,products }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-2 text-gray-900 mx-3 h3">Mila esker izen emateagatik</div>
                    </div>
                </div>
            </div>
        <GustokoenProduktuak products={products}/>
        <div className='mt-5 pt-5 bg-light border-top'>
            <div className='container-md'>
            <Footer />
            </div>
        </div>        
      </AuthenticatedLayout>
    );
}
