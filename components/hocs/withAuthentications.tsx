import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/client';


const withAuthentication = (Component) => (...props) => {
    const [session, loading] = useSession();

    useEffect(() => {
        if (!loading && !session) signIn('google');
    }, [session, loading]);

    if (loading) return null;
    if (!session) return null;

    return (
        <Component {...props} />
    );
}

export default withAuthentication;
