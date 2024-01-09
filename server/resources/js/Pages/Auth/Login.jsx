import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const [formErrors, setFormErrors] = useState({});
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const validateForm = () => {
        const errors = {};
        const atSymbol = data.email.indexOf('@')
        const dotSymbol = data.email.lastIndexOf('.')

        if (!data.email || atSymbol !== -1 && dotSymbol < atSymbol) {
            errors.email = 'Email-a gaizki dago';
        }
        if (!data.password) {
            errors.password = 'Pasahitza ezarri';
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
            post(route('login'));
        }

    };

    return (
        <GuestLayout>
            <Head title="Log in" />
    
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
    
            <form onSubmit={submit} className="text-white">
            <div>
                <InputLabel htmlFor="email" value="Email" className='row w-100 m-auto' />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-100"
                    autoComplete="username"
                    isFocused={true}
                    onChange={(e) => handleChange('email', e.target.value)} 
                />

                <InputError message={formErrors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="password" value="Password" className='row w-100 m-auto' />

                <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    className="mt-1 block w-100"
                    autoComplete="current-password"
                    onChange={(e) => handleChange('password', e.target.value)} 
                />

                <InputError message={formErrors.password} className="mt-2" />
            </div>
    
                <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>
    
                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-white hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}
    
                        <Link href='/register' className='text-white'>¿No tienes cuenta? Registrarse</Link>
    
                        <PrimaryButton className="ms-4 btn btn-secondary" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>        </form>
        </GuestLayout>
    );
}
