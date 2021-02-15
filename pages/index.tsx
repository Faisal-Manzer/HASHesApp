import React from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => (
    <div className='min-h-screen w-full flex justify-center items-center'>

        <div className='flex justify-between'>
            <div className=''>
                Navigation
            </div>
            <div className='p-16'>
                &nbsp;
            </div>
            <div className='px-8'>
                <div className='font-extrabold mx-auto font-display'>
                    <div className='text-7xl text-transparent bg-gradient-to-br bg-clip-text from-yellow-400 to-red-600'>
                        Welcome
                        <span className='font-medium'>
                    &nbsp;to
                </span>
                    </div>
                    <div className='flex'>
                        <div>
                            <img className='object-contain' src='/images/HASHes-Logo.svg' alt='' />
                        </div>
                        <div>
                            <h1 className='text-9xl text-black'>
                                HASHes
                            </h1>
                            <div className='text-base leading-3 font-body font-bold font-thin text-gray-400'>
                                The Open Programing Club of Jamia Millia Islamia
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-justify mt-16'>
                    HASHes is an initiative started by undergrads from B.Tech. to bring together students interested in programming irrespective of any specialisation and department so that there can exist a community and a platform where innovation can be disseminated and protected.
                </div>
            </div>
        </div>
    </div>
);

export default Home;
