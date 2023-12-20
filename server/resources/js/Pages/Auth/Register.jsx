
import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
        const [formErrors, setFormErrors] = useState({});
        const { data, setData, post, processing, errors, reset } = useForm({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        });
    
        useEffect(() => {
            return () => {
                reset('password', 'password_confirmation');
            };
        }, []);
    
        const validateForm = () => {
            const errors = {};
            const atSymbol = data.email.indexOf('@')
            const dotSymbol = data.email.lastIndexOf('.')
    

            if (!data.name) {
                errors.name = 'Zure izena ezarri';
            }
    
            if (!data.email || atSymbol !== -1 && dotSymbol < atSymbol) {
                errors.email = 'Email-a gaizki dago';
            }
    
            if (!data.password) {
                errors.password = 'Pasahitza ezarri';
            } else if (data.password.length < 8) {
                errors.password = 'Pasahhitzak 8 karaktere izan behar ditu';
            }
    
            if (!data.password_confirmation || data.password !== data.password_confirmation) {
                errors.password_confirmation = 'Pasahitzak ez dute koinziditzen';
            }
    
            setFormErrors(errors);
            return Object.keys(errors).length === 0;
        };
    
        const handleChange = (field, value) => {
            setFormErrors({
                ...formErrors,
                [field]: '',
            });
            setData(field, value);
        };
    
        const submit = (e) => {
            e.preventDefault();
    
            const isValid = validateForm();
    
            if (isValid) {
                post(route('register'));
            }
        };


    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="text-white">
                <div className='flex'>
                    <InputLabel htmlFor="name" value="Name" className='row w-100 m-auto' />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-100"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                    />

                    <InputError message={formErrors.name} className="mt-2" />
                </div>

                <div className="mt-4 flex">
                    <InputLabel htmlFor="email" value="Email" className=' row w-100 m-auto ' />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-100"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" className=' row w-100 m-auto ' />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-100"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" className=' row w-100 m-auto ' />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-100"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
                <Link href='/login' className='btn btn-primary'>Volver al login</Link>

            </form>
        </GuestLayout>
    );
}

