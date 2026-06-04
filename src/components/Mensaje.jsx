import React from 'react';

const Mensaje = ({ tipo, texto }) => {
  const claseMensaje = tipo === 'exito' ? 'mensaje-exito' : 'mensaje-error';

  return (
    <div className={`mensaje-alerta-box ${claseMensaje}`}>
      <p>{texto}</p>
    </div>
  );
};

export default Mensaje;