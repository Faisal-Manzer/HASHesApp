import React from 'react';


interface Props {
    className?: string;
}

const PageHeading: React.FC<Props> = ({ children, className = '' }) => (
    <h1 className={`font-display font-black text-4xl md:text-7xl ${className}`}>
        {children}
    </h1>

);

export default PageHeading;
