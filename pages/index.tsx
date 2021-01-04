import React from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => (
    <div className='min-h-screen w-full flex justify-center items-center'>
        <h1 className='font-extrabold mx-auto font-display'>
            <span className='text-9xl text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500'>
                Hello World
            </span>
        </h1>
    </div>
);

export default Home;
