import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';

import Navbar from 'components/molecules/Navbar';
import DonateBanner from 'components/atoms/DonateBanner';
import NotAuthenticated403 from 'components/molecules/NotAuthenticated403';


interface IProps {
    title: string;
    description: string;
    className?: string;
    hideDonateBanner?: boolean;
    hideNavbar?: boolean;
    authenticationRequired?: boolean;
}

const Page: React.FC<IProps> = ({
                                    children,
                                    title,
                                    description,
                                    className = '',
                                    hideDonateBanner = false,
                                    hideNavbar = false,
                                    authenticationRequired = false,
                                }) => {
    const [session, loading] = useSession();

    return (
        <div className={`min-h-screen ${className}`}>
            <Head>
                <title>{title} | HASHes Programming Club</title>
                <meta name='description' content={description} />
            </Head>
            {!hideDonateBanner && <DonateBanner />}
            {!hideNavbar && <Navbar />}
            <div className='p-4 md:p-8'>
                <div className='w-full h-1' id='progress-parent' />
                {!authenticationRequired && children}
                {authenticationRequired && (
                    <>
                        {(loading || !session) && <NotAuthenticated403 />}
                        {session && children}
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;
