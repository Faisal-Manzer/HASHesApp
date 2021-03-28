import React from 'react';
import Link from 'next/link';

interface IProps {
    icon?: string;
    className?: string;
    href?: string;

    [key: string]: any;

    disabled?: boolean;
    onClick?: () => any;
    loading?: boolean;
}


const Div = ({ children, href }) => children;

const Button: React.FC<IProps> = ({
                                      icon,
                                      children,
                                      className = '',
                                      href,
                                      disabled = false,
                                      onClick,
                                      loading = false,
                                      ...extra
                                  }) => {
    const Wrapper = React.useMemo(() => href ? Link : Div, [href]);

    return (
        <Wrapper href={href}>
            <button
                disabled={disabled}
                onClick={() => !disabled && onClick && onClick()}
                className={`inline-flex items-center cursor-pointer rounded p-2 space-x-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`} {...extra}
            >
                {loading && <i className='icon mr-2 ion-md-nuclear animate-spin' />}
                {!loading && icon && <i className={`icon mr-2 ${icon}`} />}
                {children}
            </button>
        </Wrapper>
    );
};

export default Button;
