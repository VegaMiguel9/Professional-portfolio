import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <BrowserRouter>
        <div className='navbar'>
            <div className='navButtons'>
                <a href='#Contact'>Contact</a>
            </div>
            <div className='navButtons'>
                <a href='#Projects'>Projects</a>
            </div>
            <div className='navButtons'>
                <a href='#tech'>Web Softwares</a>
            </div>
            <div className='navButtons'>
                <a href='#'>Home</a>
            </div>
        </div>
    </BrowserRouter>    
  )
}

export default Navbar;