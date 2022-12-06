import React from 'react';
import './style.scss'
const ItemHoverMain = ({ img, name, descreption, close, className }) => {
    return (
        <div className={`ItemHoverMain  ${className}`}>
            <img src={img} alt={img} />
            <div className="infomation_item">
                <h6>{name}</h6>
                <span>{descreption}</span>
            </div>
            {close && <div className={`${close} hover_close`} />}
        </div>
    );
};

export default ItemHoverMain;
