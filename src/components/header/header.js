import React from 'react';
import { HeadContent,CssTheme } from '../../data';
import './header.css';

function Header() {
  return (
    <>
      <div 
      
        style={{ backgroundImage: `url(${HeadContent.Bgimg})` }} 
        className='header-bg'
      >
        <h1 className='cover-text' style={{color:CssTheme.title}}>{HeadContent.CoverText}</h1>
        <p className='subtext' style={{color:CssTheme.title}}>{HeadContent.SubText}</p>
      </div>
    </>
  );
}

export default Header;
