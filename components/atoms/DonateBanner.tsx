import React from 'react';
import Button from './Button';


const DonateBanner: React.FC = () => (
    <div className='p-2 font-display bg-gray-900 text-white'>
        <div className='container mx-auto text-center md:text-right'>
            <Button href='/donate/'>
                <span className='text-gray-400 mx-2'>We need your support, {' '}</span>
                Donate.
            </Button>
        </div>
    </div>
);

export default DonateBanner;
