import React from 'react';

interface Props {
  className?: string;
}


const Loading: React.FC<Props> = ({ className = '' }) => (
  <div className='text-center font-display text-xl text-gray-600'>
    {/* @ts-ignore */}
    <lottie-player
      src='https://assets3.lottiefiles.com/packages/lf20_iirumcmo.json'
      background='transparent'
      speed={1}
      className='h-28 md:h-56 w-auto m-auto'
      loop
      autoplay
    />
    <div className={className}>
      Loading
    </div>
  </div>
);

export default Loading;
