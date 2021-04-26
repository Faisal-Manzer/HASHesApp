import React from 'react';

import PageHeading from 'components/atoms/PageHeading';

import LoginWithGoogle from 'components/molecules/LoginWithGoogle';


const NotAuthenticated403: React.FC = () => (
    <div className='grid grid-cols-1 space-y-4 md:grid-cols-2'>
        <div>
            <PageHeading className='text-yellow-500 text-xl md:text-2xl'>
                Knock Knock
            </PageHeading>
            <PageHeading className='text-gray-500'>
                WHO’S THERE ?
            </PageHeading>
            <PageHeading className='text-gray-500 text-2xl md:text-4xl'>
                I don’t talk to stranger 😏
            </PageHeading>
            <div className='mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-start'>
                <LoginWithGoogle />
                <span className='text-lg mx-2'>
                    So that I can know you.
                </span>
            </div>
        </div>
        <img className='h-auto w-full' src='/images/Undraw-Neighbors.svg' />
    </div>
);

export default NotAuthenticated403;
