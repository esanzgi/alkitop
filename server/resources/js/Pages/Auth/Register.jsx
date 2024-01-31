import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useUser } from '@/hooks/useUser';


export default function Register() {
    const [formErrors, setFormErrors] = useState({});
    
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        country: '',
        province: '',
        city: '',
        birthdate: '',
        gender: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const validateForm = () => {
        const errors = {};
        const atSymbol = data.email.indexOf('@');
        const dotSymbol = data.email.lastIndexOf('.');

        if (!data.name) {
            errors.name = 'Name is required';
        }

        if (!data.email || atSymbol !== -1 && dotSymbol < atSymbol) {
            errors.email = 'Email is invalid';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (!data.password_confirmation || data.password !== data.password_confirmation) {
            errors.password_confirmation = 'Passwords do not match';
        }

        if (!data.country) {
            errors.country = 'Country is required';
        }

        if (!data.province) {
            errors.province = 'Province is required';
        }

        if (!data.city) {
            errors.city = 'City is required';
        }

        if (!data.birthdate) {
            errors.birthdate = 'Birthdate is required';
        }

        if (!data.gender) {
            errors.gender = 'Gender is required';
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

            <form onSubmit={submit} >
            <div className='flex'>
                    <InputLabel htmlFor="name" value="Izena" className='row w-100 m-auto' />

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
                    <InputLabel htmlFor="email" value="Email-a" className=' row w-100 m-auto ' />

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
                    <InputLabel htmlFor="password" value="Pasahitza" className=' row w-100 m-auto ' />

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
                    <InputLabel htmlFor="password_confirmation" value="Pasahitza konfirmatu" className=' row w-100 m-auto ' />

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

                <div className="mt-4">
                    <InputLabel htmlFor="country" value="Herrialdea" className=' row w-100 m-auto ' />
                    <TextInput
                        id="country"
                        name="country"
                        value={data.country}
                        className="mt-1 block w-100"
                        onChange={(e) => handleChange('country', e.target.value)}
                        required
                    />
                    <InputError message={formErrors.country} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="province" value="Probintzia" className=' row w-100 m-auto ' />
                    <TextInput
                        id="province"
                        name="province"
                        value={data.province}
                        className="mt-1 block w-100"
                        onChange={(e) => handleChange('province', e.target.value)}
                        required
                    />
                    <InputError message={formErrors.province} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="city" value="Herria" className=' row w-100 m-auto ' />
                    <TextInput
                        id="city"
                        name="city"
                        value={data.city}
                        className="mt-1 block w-100"
                        onChange={(e) => handleChange('city', e.target.value)}
                        required
                    />
                    <InputError message={formErrors.city} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="birthdate" value="Jaiotze-eguna" className=' row w-100 m-auto ' />
                    <TextInput
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        value={data.birthdate}
                        className="mt-1 block w-100"
                        onChange={(e) => handleChange('birthdate', e.target.value)}
                        required
                    />
                    <InputError message={formErrors.birthdate} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="gender" value="Generoa" className=' row w-100 m-auto ' />
                    <select
                        id="gender"
                        name="gender"
                        value={data.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
                        className="mt-1 block w-100"
                        required
                    >
                        <option value="" disabled>Select your gender</option>
                        <option value="Gizona">Gizona</option>
                        <option value="Emakumea">Emakumea</option>
                        <option value="Beste bat">Beste bat</option>

                    </select>
                    <InputError message={formErrors.gender} className="mt-2" />
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
                <Link href='/login' className='btn btn-primary'>Back to login</Link>
            </form>
        </GuestLayout>
    );
}
