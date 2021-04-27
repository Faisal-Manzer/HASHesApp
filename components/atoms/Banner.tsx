import React from 'react';

interface Props {
    height?: string;
    className: string;
}


const Banner: React.FC<Props> = ({ className }) => {
    return (
        <img className={`w-auto ${className}`} src='/images/HASHes-Banner.svg' />
    );
};


export default Banner;
