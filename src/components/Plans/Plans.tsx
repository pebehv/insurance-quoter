import React from 'react';
import './Plans.scss'
import Header from '../Headers/Header';
import Timeline from '../Timeline/Timeline';
import '../BannerSection/BannerSection.scss'
import OptionQuote from '../OptionQuote/OptionQuote';
const Plans = () => {
  let name = 'Rocio';
  return (
    <div className='banner-container plan-main'>
        <Header/>
         <Timeline/>
         <OptionQuote name={name} />
        

    </div>
  );
};

export default Plans;