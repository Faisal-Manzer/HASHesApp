import React from 'react';

import PageHeading from 'components/atoms/PageHeading';


const PermissionRequired: React.FC = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <div>
                <img className='h-28 md:h-56 w-auto m-auto' src='/images/Undraw-NotAllowed.svg' />
                <PageHeading>
                    You need more power.
                </PageHeading>
            </div>
        </div>
    );
}

export default PermissionRequired;
