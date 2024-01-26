import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

import { Head, Link } from '@inertiajs/react';
import { Header } from '@/components/Header';
import { useUserContext } from '@/context/userContext';

export default function Edit({ auth, mustVerifyEmail, status, owner }) {
    const { login } = useUserContext()
    login(auth.user)
    return (
        <div>
            <div className='fixed-top bg-white'>
                <Header user={auth.user} owner={owner}/>
            </div>
            <div className="py-12 mt-5 pt-5">
                <div className="container mx-auto space-y-6 mt-4">
                
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg d-flex justify-content-center">
                            <Link href="/dashboard" className="col-3 rounded-full bg-success rounded-pill btn col-3 text-white fs-5">
                                    ZURE PRODUKTUAK
                            </Link>
                        </div>
                    
                    
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl mx-auto"
                            owner={owner}
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl mx-auto" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl mx-auto" />
                    </div>
                </div>
            </div>
        </div>


    );
}
