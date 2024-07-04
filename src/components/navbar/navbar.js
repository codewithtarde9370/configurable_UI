import React from 'react';
import './navbar.css';
import { NavMenu,CssTheme } from '../../data';
import { Link } from 'react-router-dom';

function Navbar() {
  const {title, menuLink, subMenu } = NavMenu[0];

  return (
    <div className="nav" style={{backgroundColor:CssTheme.background}}>
      <p className='nav-title' style={{color:CssTheme.title}}>{title}</p>
      <div className="nav-links" style={{color:CssTheme.title}}>
        <Link className="nav-menu" to="/">{menuLink.one}</Link>
        <Link className="nav-menu" to="/about">{menuLink.two}</Link>
        <Link className="nav-menu" to="/contact">{menuLink.three}</Link>
        <Link className="nav-menu" to="/services">{menuLink.four}</Link>
        <Link className="nav-menu" to="/gallery">{menuLink.five}</Link>
      </div>
      <div className="sub-menu">
        <Link to="/profile">
          <img className="profile"  alt="profile" src={subMenu.profile}  />
        </Link>
        <Link to="/theme-toggle">
          <img className="theme-toggler" alt="theme-toggler" src={subMenu.themeToggler} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
