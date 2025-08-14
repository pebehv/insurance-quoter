import React from 'react';
import './OptionQuote.scss';
import icon1 from  '../../assets/images/svg/icon1.svg'
function OptionQuote(props: any) {
  return (
    <div className='optionquote-container'> 
        <div className=' circule circule-end'> &lt;</div>
        <h3 className='timeline-title quote-return'>Volver Atras</h3>

        <div className='option-quote-insurance'>
          <h2 className='option-quote-h2'>{props.name} ¿Para quién deseas <br /> cotizar ?   </h2>
          <p className='option-quote-p'> Selecciona la opción que se ajuste más a tus necesidades</p>
        </div>

        <div className='option-card'>
          <div className='card_'>
            <div className='content-card'>
            <div className=' circule circule-card'> </div>
            </div>
            <img className='option-img' src={icon1} alt="" />
            <h5 className='option-h5'>Para mí</h5>
            <p className='option-p'>Cotiza tu seguro de salud y agrega familiares si así lo deseas</p>
          </div>
          <div className='card_'>
            <div className='content-card'>
            <div className=' circule circule-card'> </div>
            </div>
            <img className='option-img' src={icon1} alt="" />
            <h5 className='option-h5'>Para alguien más</h5>
            <p className='option-p'>Realiza una cotización para uno de tus familiares o cualquier persona</p>
          </div>

        </div>
    </div>
  );
};


export default OptionQuote;