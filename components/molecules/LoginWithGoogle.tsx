import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Button from 'components/atoms/Button';
import LoginIcon from 'components/icons/LogoutIcon';
import LogoutIcon from 'components/icons/LogoutIcon';
import Example from 'components/molecules/Example';


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
            {/* <Button onClick={signOut} className='text-lg' data-tip data-for='sign-out-tooltip'>
                <img className='w-8 h-8 rounded-full mx-2' src={session.user.image} alt={session.user.name} />
            </Button> */}
            <Example />
        </>
    );
};

export default LoginWithGoogle;
