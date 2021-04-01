import React from 'react';

interface IProps {
    className?: string;
}

const HeartIcon: React.FC<IProps> = ({ className }) => (
    <div className='inline-block m-0 p-0'>
        <svg className={`w-auto ${className}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'
             fill='currentColor'>
            <path fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd' />
        </svg>
    </div>
);

export default HeartIcon;
