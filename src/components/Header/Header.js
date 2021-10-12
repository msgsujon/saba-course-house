
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            {/* navbar here  */}
            <nav>
                <h1 className="logo">SABA COURSE HOUSE</h1>
                <div>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Courses</NavLink>
                    <NavLink to="/about">About Us </NavLink>
                    <NavLink to="/courseoffer">Course Offer</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;