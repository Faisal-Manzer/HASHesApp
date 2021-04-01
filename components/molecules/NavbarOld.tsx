import React from 'react';

import LoginWithGoogle from 'components/molecules/LoginWithGoogle';
import Logo from 'components/atoms/Logo';
import Button from 'components/atoms/Button';
import DiscordIcon from 'components/icons/DiscordIcon';
import WhatsAppIcon from 'components/icons/WhatsAppIcon';


const Navbar: React.FC = () => (
    <>
        <div className='p-2 font-display bg-black text-white'>
            <div className='container mx-auto text-center md:text-right'>
                <Button href='/donate/'>
                    <span className='text-gray-400 mx-2'>We need your help, {' '}</span>
                    Donate us
                </Button>
            </div>
        </div>
        <div className='p-4 sticky top-0 px-8 bg-white border-b-2 border-gray-100'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center space-x-4 divide-x text-gray-400'>
                    <Button href='/'>
                        <Logo className='h-8' />
                    </Button>
                    <div>
                        Blogs
                    </div>
                    <div>
                        Events
                    </div>
                    <div>
                        Hackathon
                    </div>
                    <div>
                        Weekly
                    </div>
                </div>
                <div className='flex justify-between space-x-6 items-center text-black'>
                    <DiscordIcon className='h-6' />
                    <WhatsAppIcon className='h-6' />
                    <LoginWithGoogle />
                </div>
            </div>
        </div>
    </>
);

export default Navbar;
