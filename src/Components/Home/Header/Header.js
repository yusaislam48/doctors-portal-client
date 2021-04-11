import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import BudinessInfo from '../BudinessInfo/BudinessInfo';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BudinessInfo></BudinessInfo>
        </div>
    );
};

export default Header;