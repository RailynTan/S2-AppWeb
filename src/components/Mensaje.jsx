import React from 'react';
// import './Mensaje.scss'; // Recuerda crear su archivo de estilos

const Mensaje = ({ tipo, texto }) => {
  if (!texto) return null; // Si no hay texto, no renderiza nada

  // El prop "tipo" definirá la clase CSS ('exito' o 'error')
  return (
    <div className={`alerta alerta-${tipo}`} role="alert">
      <p>{texto}</p>
    </div>
  );
};

export default Mensaje;