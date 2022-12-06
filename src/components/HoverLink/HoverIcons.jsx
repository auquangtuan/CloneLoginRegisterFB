import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const HoverIcons = ({ children, link, name, active, number, className, hover }) => {
    return (
        <Link
            to={link}
            className={`HoverIcons ${active && 'HoverIcons_active'} ${className} ${hover}`}
        >
            {children}
            <div className="HoverIcons_description">{name}</div>
            <div className="number_notification">{number}</div>
        </Link>
    );
};

export default HoverIcons;
