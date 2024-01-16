import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { Header } from '@/components/Header';

export default function Edit({ auth, mustVerifyEmail, status, owner }) {
    return (
        <div>
            <div className='fixed-top bg-white'>
                <Header user={auth.user} />
            </div>
            <div className="py-12 mt-5 pt-5">
                <div className="container mx-auto space-y-6">
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
