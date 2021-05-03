import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className=' p-4 font-display bg-gray-900 text-white text-sm container mx-auto text-center '>
            <div className= "divider">
                <div>Follow us
            <ul className="social_footer_ul  pb-8">
            <li><a href="https://www.facebook.com/HASHesJMI"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/company/hashesjmi/about/"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/hashes_jmi/"><i className="fab fa-instagram"></i></a></li>
            </ul>
            </div>
            <div>
                Join our group and become a part of this wonderful community
                <ul className="social_footer_ul  pb-8">
            <li><a href="https://chat.whatsapp.com/K9rlqMQsO1uIQmhQVGMOcL"><i className="fab fa-whatsapp"></i></a></li>
            <li><a href="https://discord.gg/e98fuehcQf"><i className="fab fa-discord"></i></a></li>
            </ul>
            </div>
            {/* JOin our group and be a part of this wonderful community */}
            </div>
            Copyright @2021 &nbsp; | &nbsp; Designed  by Hashes
        </div>
    );
}

export default Footer;
