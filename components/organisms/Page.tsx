import React from 'react';
import Head from 'next/head';

import Navbar from 'components/molecules/Navbar';
import DonateBanner from '../atoms/DonateBanner';

interface IProps {
    title: string;
    description: string;
    className?: string;
    hideDonateBanner?: boolean;
    hideNavbar?: boolean;
}

const Page: React.FC<IProps> = ({ children, title, description, className = '', hideDonateBanner = false, hideNavbar = false }) => (
    <div className={`min-h-screen ${className}`}>
        <Head>
            <title>{title} | HASHes Programming Club</title>
            <meta name='description' content={description} />
        </Head>
        {!hideDonateBanner && <DonateBanner />}
        {!hideNavbar && <Navbar />}
        <div className='p-4 md:p-8'>
            <div className='w-full h-1' id='progress-parent' />
            {children}
        </div>
    </div>
);

export default Page;
