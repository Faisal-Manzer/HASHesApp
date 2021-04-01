import React from 'react';

import Button from 'components/atoms/Button';
import Banner from 'components/atoms/Banner';

import LoginWithGoogle from 'components/molecules/LoginWithGoogle';

import DiscordIcon from 'components/icons/DiscordIcon';
import WhatsAppIcon from 'components/icons/WhatsAppIcon';

import { NAV_BAR_LINKS } from 'helpers/constants/app';


const Navbar: React.FC = () => (
    <div className='p-4 md:px-8 sticky top-0 bg-white border-b-2 border-gray-100 grid grid-cols-1 md:grid-cols-2'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <Button href='/' className='justify-center md:justify-start'>
                <Banner className='h-6' />
            </Button>

            <div className='hidden md:flex flex-wrap items-center space-x-4 text-gray-500'>
                {NAV_BAR_LINKS.map(({ label, href }) => (
                    <Button href={href} key={label}>
                        {label}
                    </Button>
                ))}
            </div>

        </div>
        <div className='md:hidden my-2'>
            {' '}
        </div>
        <div className='flex space-x-6 items-center justify-center md:justify-end'>
            <a href='https://discord.gg/e98fuehcQf' target='_blank' rel='noreferrer'>
                <DiscordIcon className='h-6' />
            </a>
            <a href='https://chat.whatsapp.com/K9rlqMQsO1uIQmhQVGMOcL' target='_blank' rel='noreferrer'>
                <WhatsAppIcon className='h-6' />
            </a>
            <LoginWithGoogle />
        </div>
    </div>
);

export default Navbar;
