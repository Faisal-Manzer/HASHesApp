import React from 'react';

interface IProps {
    className?: string;
}

const LogoutIcon: React.FC<IProps> = ({ className = '' }) => (
    <div className='inline-block m-0 p-0'>
        <svg className={`w-auto ${className}`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
             stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
        </svg>
    </div>
);

export default LogoutIcon;