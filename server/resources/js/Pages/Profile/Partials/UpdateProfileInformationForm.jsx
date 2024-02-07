    import InputError from '@/Components/InputError';
    import InputLabel from '@/Components/InputLabel';
    import PrimaryButton from '@/Components/PrimaryButton';
    import TextInput from '@/Components/TextInput';
    import { Link, useForm, usePage } from '@inertiajs/react';
    import { Transition } from '@headlessui/react';
    import { useState } from 'react';
    import { useUser } from '@/hooks/useUser';
    import { useEffect } from 'react';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faUser } from '@fortawesome/free-solid-svg-icons';
import { PUBLIC_AVATARS_URL } from '@/assets/utils/constants';
import { UserDetails } from '@/components/user/UserDetails';


    export default function UpdateProfileInformation({ mustVerifyEmail, status, owner, className = '' }) {
        const user = usePage().props.auth.user;
        const { getUserDetailsByIdUser, userDetails } = useUser();
        const { post } = useForm();

        const { data: userData, setData: setUserData, post: postUser, errors: errorsUser, processing: processingUser, recentlySuccessful: recentlySuccessfulUser } = useForm({
            name: user.name || '',
            email: user.email || '',
            country: userDetails.country || '',
            province: userDetails.province || '',
            city: userDetails.city || '',
            img: userDetails.profile_image || '',

        });

        const { data: ownerData, setData: setOwnerData, post: postOwner, errors: errorsOwner, processing: processingOwner, recentlySuccessful: recentlySuccessfulOwner } = useForm({
            tlf: owner ? owner.phone_number || '' : '',
            dni: owner ? owner.dni || '' : '',
        });

        useEffect(() => {
            getUserDetailsByIdUser({ idUser: user.id_user });
        }, [getUserDetailsByIdUser]);

        const submitUser = (e) => {
            e.preventDefault();
            postUser(route('profile.update'));
        };

        const submitOwner = (e) => {
            e.preventDefault();
            postOwner(route('profileOwner.update'));
        };

        const Avatar = userDetails.profileImage || faUser;

        console.log(userDetails);

        return (
            <section className={className}>
                <header>
                    <h2 className="text-lg font-medium text-gray-900">Zure perfilaren informazioa</h2>
                </header>

                <div className={`d-flex justify-content-around align-items-center ${user.id_role === 4 ? '' : 'flex-row'}`}>
                    <div className={`my-5 ${user.id_role !== 4 ? 'order-1 order-md-0' : ''}`}>
                        <form action='/profile/addImage' method='post' className='d-flex justify-content-center flex-column align-items-center border rounded p-4 bg-light' encType="multipart/form-data">
                            <input type='hidden' name='userDetails' value={userDetails.idDetail}></input>
                            {typeof Avatar === 'string' ? (
                                <img src={PUBLIC_AVATARS_URL+Avatar || Avatar} alt="User Avatar" className="rounded-circle mb-3" style={{ width: '200px', height: '200px' }} />
                            ) : (
                                <FontAwesomeIcon icon={Avatar} size="5x" className="rounded-circle mb-3" style={{ width: '200px', height: '200px' }} />
                            )}

                            <div className="my-3">
                                <label htmlFor="newImage" className="form-label">Aukeratu irudi berria:</label>
                                <input type="file" id="newImage" className="form-control" name='irudi' />
                            </div>

                            <PrimaryButton disabled={processingOwner}>Irudi berria ezarri</PrimaryButton>
                        </form>
                    </div>

                    <div className='d-flex flex-column'>
                        <label className='text-center'>Erabiltzaile datuak</label>
                        <form onSubmit={submitUser} className='ms-5'>
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

                            <div>
                                <InputLabel htmlFor="email" value="Email-a" className='me-2' />

                                <TextInput
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={userData.email}
                                    onChange={(e) => setUserData('email', e.target.value)}
                                    autoComplete="username"
                                    required
                                />

                                <InputError className="mt-2" message={errorsUser.email} />
                            </div>
                            <div>
                                <InputLabel htmlFor="country" value="Country" className='me-2' />

                                <TextInput
                                    id="country"
                                    className="mt-1 block w-full"
                                    placeholder={userDetails.country}
                                    onChange={(e) => setUserData('country', e.target.value)}
                                />

                                <InputError className="mt-2" message={errorsUser.country} />
                            </div>

                            <div >
                                <InputLabel htmlFor="province" value="Province" className='me-2' />

                                <TextInput
                                    id="province"
                                    className="mt-1 block w-full"
                                    placeholder={userDetails.province}
                                    onChange={(e) => setUserData('province', e.target.value)}
                                    autoComplete="province"
                                />

                                <InputError className="mt-2" message={errorsUser.country} />
                            </div>

                            <div className='mb-3'>
                                <InputLabel htmlFor="city" value="City" className='me-2' />

                                <TextInput
                                    id="city"
                                    className="mt-1 block w-full"
                                    placeholder={userDetails.city}
                                    onChange={(e) => setUserData('city', e.target.value)}
                                    autoComplete="city"
                                />

                                <InputError className="mt-2" message={errorsUser.country} />
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
                            <div className='d-flex flex-column mt-5'>
                                <label className='text-center'>Owner datuak</label>
                                <form onSubmit={submitOwner} className='ms-5'>
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
                            </div>

                        )}
                    </div>

                </div>

            </section>
        );
    }
