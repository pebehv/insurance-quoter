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
        <div className='quote-form__summary-box'>
            <h3 className='texto-header'>
                ¡Compra por este medio!
            </h3>
            <h4 className='phone-header'>
                <img className='phone-icon' src={phone} alt="" />                   
                 <span className='phone-text'>

                    (01) 411 6001
                 </span>
            </h4>
        </div>
    </div>
  );
};

export default Header;