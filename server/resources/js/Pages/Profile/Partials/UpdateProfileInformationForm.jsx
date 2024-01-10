import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status,owner, className = '' }) {
    const user = usePage().props.auth.user; 

    const { data: userData, setData: setUserData, patch: patchUser, errors: errorsUser, processing: processingUser, recentlySuccessful: recentlySuccessfulUser } = useForm({
        name: user.name,
        email: user.email,
    });

    const { data: ownerData, setData: setOwnerData, patch: patchOwner, errors: errorsOwner, processing: processingOwner, recentlySuccessful: recentlySuccessfulOwner } = useForm({
        tlf: owner.phone_number,
        dni: owner.dni,
    });

    const submitUser = (e) => {
        e.preventDefault();
        patchUser(route('profile.update'));
    };

    const submitOwner = (e) => {
        e.preventDefault();
        patchOwner(route('profileOwner.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Zure perfilaren informazioa</h2>
                {user.id_role !== 4 && (
                    <p className="mt-1 text-sm text-gray-600">
                        Zure email-a eguneratu
                    </p>
                )}
                {user.id_role === 4 && (
                <div className='d-flex justify-content-around mt-3'>
                    <label className="mt-1 text-gray-600 mb-3">
                        Zure email-a eguneratu
                    </label>
                    <label className="mt-1 text-gray-600 mb-3">
                        Alokatzaile bezala duzun informazioa eguneratu
                    </label>
                    
                </div>
                )}
                
            </header>

            <div className={user.id_role === 4 ? 'd-flex justify-content-around' : ''}>        
            <form onSubmit={submitUser} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Izena" className='me-2' />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={userData.name}
                        onChange={(e) => setUserData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errorsUser.name} />
                </div>

                <div className='mb-3'>
                    <InputLabel htmlFor="email" value="Email-a" className='me-2' />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={userData.email}
                        onChange={(e) => setUserData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errorsUser.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div >
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processingUser}>Eguneratu</PrimaryButton>

                    <Transition
                        show={recentlySuccessfulUser}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Eguneratuta.</p>
                    </Transition>
                </div>
            </form>
            {user.id_role === 4 && (
            <form onSubmit={submitOwner} className='mx-5'>
                <input type="hidden" name="user" value={user}></input>
                <div>
                    <div>
                        <InputLabel htmlFor="tlf" value="Telefono zenbakia" className='me-2' />

                        <TextInput
                            id="tlf"
                            className="mt-1 block w-full"
                            value={ownerData.tlf}
                            onChange={(e) => setOwnerData('tlf', e.target.value)}
                            required
                            autoComplete="tlf"
                        />

                        <InputError className="mt-2" message={errorsOwner.tlf} />
                    </div>

                    <div className='mb-3'>
                        <InputLabel htmlFor="dni" value="NAN-a" className='me-2' />

                        <TextInput
                            id="dni"
                            type="text"
                            className="mt-1 block w-full"
                            value={ownerData.dni}
                            onChange={(e) => setOwnerData('dni', e.target.value)}
                            required
                            autoComplete="dni"
                        />

                        <InputError className="mt-2" message={errorsOwner.dni} />
                    </div>
                    <div className="flex items-center gap-4">
                        <PrimaryButton disabled={processingOwner}>Eguneratu</PrimaryButton>

                        <Transition
                            show={recentlySuccessfulOwner}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600">Eguneratuta.</p>
                        </Transition>
                    </div>
                </div>
            </form>
            )}
        </div>
            
        </section>
    );
}
