import React from 'react';
import Link from 'next/link';

import Logo from 'components/atoms/Logo';
import Button from 'components/atoms/Button';
import LoginWithGoogle from 'components/molecules/LoginWithGoogle';


const Page: React.FC = ({ children }) => (
    <div className='container px-4 mx-auto'>
        <div className='min-h-screen w-full'>
            <div className='border-gray-100 border-b-2 flex justify-between'>
                <div className='p-2 '>
                    <Link href='/'>
                        <a>
                            <Logo height='h-10' />
                        </a>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <Button>
                        Events
                    </Button>
                    <Button>
                        Hackathons
                    </Button>
                </div>
                <div className='flex items-center text-lg space-x-2'>
                    <Button href='/donate/' icon='ion-md-heart' className='bg-blue-700 text-blue-100'>Donate us</Button>
                    <LoginWithGoogle />
                </div>
            </div>
            <div className='mt-10'>
                {children}
            </div>
        </div>
    </div>
);

export default Page;
