import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic /*sintaxis de desestructuración del objeto Botón*/}) {
  return (
    <button 
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} //className 'condicional o ternario': si el botón hace clic se asigna la clase 'boton-clic'y si no lo es, se asigna 'boton-reiniciar'
      onClick={manejarClic} /*eventListener*/> 
      {texto}
    </button>
  );
}

export default Boton; //con la exportación por defecto, solo se puede exportar un elemento del archivo, en este caso, el botón