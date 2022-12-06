import React from 'react';
import Header from '../../components/Header';

const HomePageLayout = ({ children }) => {
    return (
        <div className="main">
            <Header />
            <div>{children}</div>
        </div>
    );
};

export default HomePageLayout;
