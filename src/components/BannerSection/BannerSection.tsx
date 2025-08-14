import React from 'react';
import QuoteForm from '../QuoteForm/QuoteForm';
import family from '../../assets/images/family.png'
import Header from '../Headers/Header';
import './BannerSection.scss'
const BannerSection = () => {
  return (
    <div className='banner-container'> 

      
      <Header/>
        
      <div className="quote-section">
        <div  className='img-main'>
          
          <img  className='quote-img' src={family} alt="Responsive" />
        </div>
        <div className='quote-form__section'>
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;