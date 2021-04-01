import React from 'react';
import Link from 'next/link';

import Spinner from 'components/atoms/Spinners';

interface IProps {
    className?: string;
    href?: string;

    [key: string]: any;

    disabled?: boolean;
    onClick?: () => void;
    loading?: boolean;
}


const Div = ({ children }) => children;

const Button: React.FC<IProps> = ({
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
                onClick={() => onClick && !disabled && onClick()}
                className={`inline-flex items-center cursor-pointer rounded p-2 space-x-2 disabled:cursor-not-allowed ${className}`} {...extra}
            >
                {loading && <Spinner />}
                {children}
            </button>
        </Wrapper>
    );
};

export default Button;
