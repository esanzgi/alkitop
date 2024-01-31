import React from 'react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';


export default function Guest({ children }) {
  return (
    <div className="bg-natura h-100 d-flex align-items-center justify-content-center">
        <div className='m-auto'>
            <div className="m-auto w-50 text-center ">
                <Link href="/">
                    <ApplicationLogo/>
                </Link>
            </div> 
            
            <div className="bg-white bg-opacity-75  p-4 mx-10 rounded shadow">{children}</div>
        </div>
    </div>
  );
}
