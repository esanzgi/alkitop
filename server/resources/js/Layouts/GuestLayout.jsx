import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className=' m-auto w-25 text-center mt-5 bg-success p-5  '>
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-success shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
