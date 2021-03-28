import React from 'react';


const WelcomeText: React.FC = () => (
    <div className='font-display font-black'>
        <div
            className='text-7xl text-transparent bg-gradient-to-br bg-clip-text from-yellow-400 to-red-600'>
            Welcome,
            <span className='font-medium'>
            &nbsp;to the club
        </span>
        </div>
    </div>
);


export default WelcomeText;
