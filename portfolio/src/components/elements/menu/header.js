import React from 'react';
import '../../../assets/css/header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-link"><h2>About me, Why Me </h2></Link>
            <Link to="/" className="header-link"><h2>Let's collaborate</h2></Link>
        </header>
    )
};

export default Header;