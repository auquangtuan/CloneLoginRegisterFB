import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const HoverLink = ({ title, descreption, navigate , icon}) => {
    return (
        <div className="HoverLink">
            <Link to={navigate ? navigate : '/'} className="linkTitle">
                {title} {icon && <i className={icon}></i>}
                <span className="linkDescreption">{descreption} </span>
            </Link>
        </div>
    );
};

export default HoverLink;
