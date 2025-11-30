import React from 'react';
import testing from './data/testing.json'; 
import './styles/Proyects.css';

const Testing = () => {
  return (
    <section id="testing">
      <h2>Proyectos de Testing</h2>
      <div>
        <p>Se visualizan algunos de mis proyectos de Testing QA Manual. Para verlos todos ir a:<a href="https://github.com/caropenaIt/portfolio-testing" target="_blank">Ver Repositorio</a></p>
      
      </div>
      <div id='projects'>
      <div className='tarjetitas'>
        {testing.map((test) => (
          <article key={test.id}>
            <h4>{test.nombre}</h4>
              <p>Casos de prueba</p>
                <img src={test.imagenUno} alt={test.nombre} />
              <p>Defectos/issues</p>
                <img src={test.imagenDos} alt={test.nombre} />
            <p>{test.descripcion}</p>
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