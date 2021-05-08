import React from 'react';
import LinkedinIcon from 'components/icons/LinkedinIcon';
import InstagramIcon from 'components/icons/InstagramIcon';
const Footer: React.FC = () => {
    return (
        <div className='p-4 font-display bg-gray-900 text-white text-sm container mx-auto text-center '>
            <div className= 'divider'>
                <div>Follow us
            <ul className='p-4'>
            <a className='p-4' href='https://www.linkedin.com/company/hashesjmi/about/' target='_blank' rel='noreferrer'>
                <LinkedinIcon className='h-6' />
            </a>
            <a href='https://www.instagram.com/hashes_jmi/' target='_blank' rel='noreferrer'>
                <InstagramIcon className='h-6' />
            </a>
            </ul>
            </div>
            </div>
            Copyright &copy;2021 &nbsp; | &nbsp; Designed  by Hashes
        </div>
    );
}

export default Footer;
