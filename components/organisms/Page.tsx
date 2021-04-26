import React from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/client';

import { Permission } from 'types/auth.type';

import Navbar from 'components/molecules/Navbar';
import DonateBanner from 'components/atoms/DonateBanner';
import NotAuthenticated403 from 'components/organisms/NotAuthenticated403';
import PermissionRequired from 'components/organisms/PermissionRequired';
import { usePermission } from 'hooks/auth.hook';

interface IProps {
    title: string;
    description: string;
    className?: string;
    hideDonateBanner?: boolean;
    hideNavbar?: boolean;
    authenticationRequired?: boolean;
    permission?: Permission;
    disablePermissionCheck?: boolean;
}


const Page: React.FC<IProps> = ({
    children,
    title,
    description,
    className = '',
    hideDonateBanner = false,
    hideNavbar = false,
    authenticationRequired = false,
    permission,
    disablePermissionCheck = false
}) => {
    const [session, loading] = useSession();
    const hasPermission = usePermission(permission);

    return (
        <div className={`min-h-screen ${className}`}>
            <Head>
                <title>{title} | HASHes Programming Club</title>
                <meta name='description' content={description} />
            </Head>
            {!hideDonateBanner && <DonateBanner />}
            {!hideNavbar && <Navbar />}
            <div className='p-4 md:p-8'>
                {!disablePermissionCheck && !hasPermission && <PermissionRequired />}
                {hasPermission && (
                    <>
                        {!authenticationRequired && children}
                        {authenticationRequired && (
                            <>
                                {(loading || !session) && <NotAuthenticated403 />}
                                {session && children}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Page;
