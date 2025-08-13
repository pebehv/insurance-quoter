import React from 'react';
import logo from '../../assets/images/logo.png'
import phone from '../../assets/images/phon.png'
import './Header.scss'
const Header = () => {
  return (
    <div className="header-container">
        <div className='img-logo'>
            <img src={logo} alt="" />
        </div>
        <div className='header-title'>
            <p className='header-title-flex' >
              <span className='texto-header'>¡Compra por este medio!</span>  
              
              <img className='phone-icon' src={phone} alt="" /> 
              <span className='phone-text'>  (01) 411 6001 </span>  
            </p>
            
        </div>
    </div>
  );
};

export default Header;