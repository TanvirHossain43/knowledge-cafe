import React from 'react';
import './Header.css'
import image from './../../../public/header-image.jpg'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h1>Knowledge cafe</h1>
            </div>
            <div className='header-right'>
                <div className='header-links'>
                    <a href="#" id="">Home</a>
                    <a href="#" id="">Blogs</a>
                    <a href="#" id="">Profile</a>
                </div>
                <div className='header-img'>
                    <img src={image} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Header;