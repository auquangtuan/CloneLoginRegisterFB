import React from 'react';
import { Link } from 'react-router-dom';
import { language, references } from './data';
import HoverLink from '../HoverLink';
import './style.scss'
const Footer = () => {
    return (
        <footer className="registerBussiness">
            <div className="loginFooterWrapper">
                {language.map((item, index) => {
                    return (
                        <HoverLink
                            key={index}
                            title={item.title}
                            descreption={item.descreption}
                        />
                    );
                })}
                <Link to="/" className="footerSquare">
                    <i className="plus_icon"></i>
                </Link>
                <div className="spliter"></div>
                <div className="loginFooterWrapper">
                    {references.map((item, index) => {
                        return (
                            <HoverLink
                                key={index}
                                title={item.title}
                                descreption={item.description}
                                icon={item.icon}
                            />
                        );
                    })}
                </div>
                <div className='copyRight'>
                Meta © 2022
                </div>
            </div>
        </footer>
    );
};
export default Footer;
