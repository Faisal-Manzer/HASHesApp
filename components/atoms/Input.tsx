import React from 'react';

interface Props {
    [key: string]: any;

    type?: 'text' | 'number';
    className?: string;
    disabled?: boolean;
    onChange?: (value: string) => void;
}


const Input: React.FC<Props> = ({ onChange, className, type = 'text', disabled = false, ...extraProps }) => (
    <input
        type={type}
        className={`rounded-lg text-lg border-2 border-gray-100 focus:ring-transparent focus:border-transparent focus:bg-gray-100 focus:text-black transition placeholder-gray-300 ${className}`}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        {...extraProps}
    />
);

export default Input;
