import React from 'react';
import Button from './Button';


const DonateBanner: React.FC = () => (
    <div className='p-2 font-display bg-black text-white'>
        <div className='container mx-auto text-center md:text-right'>
            <Button href='/donate/'>
                <span className='text-gray-400 mx-2'>We need your help, {' '}</span>
                Donate us
            </Button>
        </div>
    </div>
);

export default DonateBanner;
