import React from 'react';
import { NextPage } from 'next';

import Page from 'components/organisms/Page';
import PageHeading from 'components/atoms/PageHeading';


const NotFound: NextPage = () => {
  return (
    <Page
      title='404 Not Found'
      description='Page not found'
    >
      <div className='flex justify-center items-center'>
        <div>
          <img className='h-28 md:h-56 w-auto m-auto' src='/images/Undraw-404.svg' />
          <PageHeading>
            Lost in love.
          </PageHeading>
        </div>
      </div>
    </Page>
  );
};

export default NotFound;
