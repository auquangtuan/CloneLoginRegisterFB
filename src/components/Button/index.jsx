import React from 'react';
import './style.scss';
const Button = ({ className, name, color, onClick, ...rest }) => {
    return (
        <button
            className={`buttonComponent ${className} ${color}`}
            onClick={onClick}
            {...rest}
        >
            {name}
        </button>
    );
};

export default Button;
