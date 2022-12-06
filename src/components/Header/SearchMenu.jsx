import React from 'react';
import { Search } from '../../assets/svg';
import ItemHoverMain from '../ItemHoverMain/ItemHoverMain';

const SearchMenu = ({ color, handleChange, visible}) => {
    return (
        <div className="header_search">
            <Search color={color} />
            <input
                onChange={handleChange}
                type="text"
                placeholder="Tìm kiếm trên Facebook"
                className="input_mobile"
            />
            {visible && 
                <div className="header_search_box">
                    <div className="header_title">
                        <span className="title_search">Tìm kiếm gần đây</span>
                        <span className="header_edit">Chỉnh sửa</span>
                    </div>
                    <div style={{ width: 303, height: 48 }}>
                        <ItemHoverMain
                            img="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/240651948_3065735157004501_7737694740032947543_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=41a7af&_nc_ohc=1buVyLxOfpsAX8yLUJt&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAxxZnEMlNo3uY-fgASEQlDn0Quk6afl5Vw2PawNR6-cQ&oe=637F3040"
                            name="My Tien"
                            descreption="Ban Be"
                            close="close_icon"
                        />
                    </div>
                    <div style={{ width: 303, height: 48 }}>
                        <ItemHoverMain
                            img="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/240651948_3065735157004501_7737694740032947543_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=41a7af&_nc_ohc=1buVyLxOfpsAX8yLUJt&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAxxZnEMlNo3uY-fgASEQlDn0Quk6afl5Vw2PawNR6-cQ&oe=637F3040"
                            name="My Tien"
                            descreption="Ban Be"
                            close="close_icon"
                        />
                    </div>
                    <div style={{ width: 330, height: 52 }}>
                        <ItemHoverMain
                            img="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/240651948_3065735157004501_7737694740032947543_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=108&ccb=1-7&_nc_sid=41a7af&_nc_ohc=1buVyLxOfpsAX8yLUJt&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAxxZnEMlNo3uY-fgASEQlDn0Quk6afl5Vw2PawNR6-cQ&oe=637F3040"
                            name="My Tien"
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchMenu;
