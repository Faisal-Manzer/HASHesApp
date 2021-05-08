import React from 'react';
import { signIn, useSession } from 'next-auth/client';
import Button from 'components/atoms/Button';
import LoginIcon from 'components/icons/LogoutIcon';
import Userlogout from 'components/molecules/Userlogout';


const LoginWithGoogle = () => {
    const [session, loading] = useSession();

    if (loading) return null;

    if (!session)
        return (
            <Button onClick={() => signIn('google')} className='bg-black rounded-lg text-white hover:shadow text-lg'>
                <LoginIcon className='h-6 mx-2' />
                Login
            </Button>
        );

    return (
        <>
            <Userlogout />
        </>
    );
};

export default LoginWithGoogle;
