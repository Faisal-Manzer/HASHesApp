import React from 'react';

import Spinner from 'components/atoms/Spinner';

interface Props {
  className?: string;
}


const Loading: React.FC<Props> = ({ className = '' }) => (
  <div className='text-center font-display text-xl text-gray-600'>
    <img className='h-28 md:h-56 w-auto' src='/gifs/Loading.gif' />
    <div className={className}>
      <Spinner className='h-5 text-yellow-600' />
      Loading
    </div>
  </div>
);

export default Loading;
