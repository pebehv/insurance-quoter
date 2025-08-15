import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//nst root = ReactDOM.createRoot(document.getElementById('root'));
const container = document.getElementById('root');

// Verificamos si el 'container' no es null
if (container) {
  // Ahora TypeScript sabe que 'container' es un HTMLElement
  // Puedes usarlo de forma segura aquí
  const root = ReactDOM.createRoot(container);
  //ot.render(<App />);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Manejar el caso en que el elemento no existe
  console.error('El elemento con el ID "root" no se encontró en el DOM.');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
