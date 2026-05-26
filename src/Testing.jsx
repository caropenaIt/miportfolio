import React from 'react';
import testing from './data/testing.json'; 
import './styles/Proyects.css';

const renderConEstilo = (texto) => {
  if (!texto.includes('MEJOR PROYECTO')) return texto;
  
  return texto.split(/(MEJOR PROYECTO🥇)/g).map((parte, i) => 
    parte === 'MEJOR PROYECTO🥇' 
      ? <span key={i} className="mejor-proyecto">{parte}</span>
      : parte
  );
};

const Testing = () => {
  return (
    <section id="testing">
      <h2>Proyectos de Testing</h2>
      <div>
        <p>Se visualizan algunos de mis proyectos de mi rol de Tester QA. Los mismos se encuentran ordenados de más a menos recientes; con proyectos destacados entre ellos. Para verlos todos ir a: <a href="https://github.com/caropenaIt/portfolio-testing" target="_blank">Ver Repositorio</a></p>
      </div>
      <div id='projects'>
      <div className='tarjetitas'>
        {[...testing].reverse().map((test) => (
          <article key={test.id}>
            <h4>{test.nombre}</h4>
              <p>Casos de prueba</p>
                <img src={test.imagenUno} alt={test.nombre} />
              <p>Defectos/issues</p>
                <img src={test.imagenDos} alt={test.nombre} />
            <p>{renderConEstilo(test.descripcion)}</p>
            <div className='boton'>
            {test.especificaciones ? (
    <a href={test.especificaciones} target="_blank">Ver especificaciones</a>
  ) : (
    <span className="boton-disabled">Sin especificaciones</span>
  )}
            <a href={test.repositorio} target="_blank">Ver Repositorio</a>
            <a href={test.web} target="_blank">Ver web-app</a>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testing;