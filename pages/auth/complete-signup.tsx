import React from 'react';
import { NextPage } from 'next';
import { useSession } from 'next-auth/client';


const CompleteSignup: NextPage = () => {
    const [session] = useSession();

    return (
        <div className='min-h-screen w-full'>
            Hi new user {session && session.user.email}
            {session && JSON.stringify(session.user)}
        </div>
    );
};

export default CompleteSignup;
