import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

import Button from 'components/atoms/Button';


const LoginWithGoogle = () => {
    const [session, loading] = useSession();

    if (loading) return null;

    if (!session)
        return (
            <Button onClick={() => signIn('google')} icon='ion-logo-google text-gray-900 text-2xl' className='bg-gray-200'>
                Login With Google
            </Button>
        );

    return (
        <Button onClick={signOut} className='bg-gray-200'>
            <img className='w-8 h-8 rounded-full mx-2' src={session.user.image} alt={session.user.name} />
            {session.user.email}
        </Button>
    )
};

export default LoginWithGoogle;
