import React  from 'react';

interface IProps {
    height?: string;
}


const Logo: React.FC<IProps> = ({ height= 'h-8' }) => {
    return (
        <div className='inline-block m-0 p-0'>
            <img className={`w-auto ${height}`} src='/images/HASHes-Banner.svg' alt='' />
        </div>
    );
};


export default Logo;
