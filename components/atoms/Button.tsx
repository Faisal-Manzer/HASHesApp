import React from 'react';
import Link from 'next/link';

import Spinner from 'components/atoms/Spinner';

interface Props {
    className?: string;
    href?: string;

    [key: string]: any;

    disabled?: boolean;
    onClick?: () => void;
    loading?: boolean;
}


const Div = ({ children }) => children;

const Button: React.FC<Props> = ({
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
                className={`inline-flex items-center cursor-pointer rounded p-2 space-x-2 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:outline-none ${className}`} {...extra}
            >
                {loading && <Spinner className='h-5' />}
                {children}
            </button>
        </Wrapper>
    );
};

export default Button;
