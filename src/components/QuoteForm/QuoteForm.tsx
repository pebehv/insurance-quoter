import React, { useState } from 'react';
import './QuoteForm.scss';

// Definición de tipos para las props si las tuviera
interface QuoteFormProps {
  // Por ejemplo: onFormSubmit: (data: FormData) => void;
}

// Definición de tipos para el estado
interface FormData {
  dni: string;
  celular: string;
}

const QuoteForm: React.FC<QuoteFormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    dni: '',
    celular: '',
  });

  // La función recibe un evento de formulario, que es de tipo React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  // La función para manejar el cambio de inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='quoter-section'>
      <div className='h5'>
        <h5>
          Seguro Salud Flexible
        </h5>
      </div>
      <div>
        <h2>
          Creado para ti y tu familia
        </h2>
        <h6>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </h6>
      </div>
      <form onSubmit={handleSubmit} className="quote-form">

        <div className='quote-form__summary-box'>
          <div className="input-group input-group-lg  quote-form__dni">
            <select className="form-select" aria-label="Default select example">
              <option selected>DNI</option>
            </select>
            <input type="text" className="form-control quote-form__label"  placeholder="Nro. de documento" aria-label="nombre" aria-describedby="inputGroup-sizing-lg"/>
          </div>

          <div className="input-group input-group-lg">
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
          </div>
        </div>
        
        <div className='checks'>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="checkDefault" checked />
            <label className="form-check-label" htmlFor="checkDefault">
              Acepto lo Política de Privacidad
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="checkChecked" checked />
            <label className="form-check-label" htmlFor="checkChecked">
              Checked checkbox
            </label>
          </div>
          <p className='p'>Aplican Términos y Condiciones.</p>
        </div>
        <button type="submit" className='button-rounded'>Cotiza aquí</button>
      </form>
    </div>
  );
};

export default QuoteForm;