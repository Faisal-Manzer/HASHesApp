import React  from 'react';
import { useSession } from 'next-auth/client';

import Page from 'components/organisms/Page';
import PageHeading from 'components/atoms/PageHeading';


const withAuthentication = (Component) => (...props) => {
    const [session, loading] = useSession();

    if (loading || !session) return (
        <Page title='Let us know each other.' description=''>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <PageHeading>
                    Hmmm... I don&lsquo;t talk to stranger.
                </PageHeading>
                <img className='h-28 md:h-56 w-auto' src='/images/Undraw-Enter.svg' />
            </div>
        </Page>
    );

    return (
        <Component {...props} />
    );
}

export default withAuthentication;
