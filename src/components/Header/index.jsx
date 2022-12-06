import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/svg';
import HoverIcons from '../HoverLink/HoverIcons';
import { Menus, Options } from './menu';
import SearchMenu from './SearchMenu';
import './style.scss';
import useClickOutside from '../../helper/hook/useClickOutside'
const Header = () => {
    let color = '#65676b';
    const [visible, setVisible] = useState(false)
    const ref = useRef  (null)
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (

        <header>
            <div className="header_left" ref={ref}>
                <Link to="/" className="header_logo">
                    <div className="circle_logo">
                        <Logo />
                    </div>
                </Link>
                <SearchMenu color={color} handleChange={handleChange}/>
            </div>
            <div className="header_middle">
                {Menus.map((item, index) => {
                    return (
                        <HoverIcons
                            key={index}
                            children={<item.icon color={index ? color : undefined} />}
                            className="header_menu_middle"
                            link={item.link}
                            active={!index}
                            name={item.name}
                            hover={index && 'hover_second'}
                        />
                    );
                })}
            </div>
            <div className="header_right">
                {Options.map((item, index) => {
                    return (
                        <HoverIcons
                            key={index}
                            className="header_right_menu"
                            children={<item.icon color={index ? color : undefined} />}
                            link={item.link}
                            name={item.name}
                            number={index === 2 ? 9 : null}
                            hover={'hover_second'}
                        />
                    );
                })}
            </div>
        </header>
    );
};

export default Header;
