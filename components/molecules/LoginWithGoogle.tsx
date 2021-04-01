import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import ReactTooltip from 'react-tooltip';

import Button from 'components/atoms/Button';
import LoginIcon from 'components/icons/LogoutIcon';
import LogoutIcon from 'components/icons/LogoutIcon';


const LoginWithGoogle = () => {
    const [session, loading] = useSession();

    if (loading) return null;

    if (!session)
        return (
            <Button onClick={() => signIn('google')} className='bg-black rounded-lg text-white hover:shadow text-lg'>
                <LoginIcon className='h-6 mx-2' />
                Sign In
            </Button>
        );

    return (
        <>
            <Button onClick={signOut} className='text-lg' data-tip data-for='sign-out-tooltip'>
                <img className='w-8 h-8 rounded-full mx-2' src={session.user.image} alt={session.user.name} />
                <LogoutIcon className='h-6' />
            </Button>

            <ReactTooltip id='sign-out-tooltip' effect='solid' place='bottom' className='bg-gray-700 text-white'>
                <b>
                    {session.user.name}
                </b>
                {' '}
                ({session.user.email})
            </ReactTooltip>
        </>
    );
};

export default LoginWithGoogle;
