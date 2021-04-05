import React from 'react';

import PageHeading from 'components/atoms/PageHeading';


const NotAuthenticated403: React.FC = () => (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <PageHeading>
            Hmmm... I don&lsquo;t talk to stranger.
        </PageHeading>
        <img className='h-28 md:h-56 w-auto' src='/images/Undraw-Enter.svg' />
    </div>
);

export default NotAuthenticated403;
