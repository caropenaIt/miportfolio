import React from 'react';
import frontend from './data/frontend.json'; 
import './styles/Proyects.css';

const renderConEstilo = (texto) => {
  if (!texto.includes('MEJOR PROYECTO')) return texto;
  
  return texto.split(/(MEJOR PROYECTO🥇)/g).map((parte, i) => 
    parte === 'MEJOR PROYECTO🥇' 
      ? <span key={i} className="mejor-proyecto">{parte}</span>
      : parte
  );
};

const Projects = () => {
  return (

    <section id="projects">

      <h2>Mis páginas web</h2>
      <p>Mis sitios web y web-apps que he desarrollado hasta el momento(incluyendo el portfolio) como desarrolladora frontend. Los mismos se encuentran ordenados de más a menos recientes, con proyectos destacados entre ellos.</p>
      <div className='tarjetitas'>
        {[...frontend].reverse().map((project) => (
          <article key={project.id}>
            <h4>{project.nombre}</h4>
            <img src={project.imagen} alt={project.nombre} />
            <p>{renderConEstilo(project.descripcion)}</p>
            <p>Tecnologías: {project.tecnologias.join(", ")}</p>
            <div className='boton'>
            <a href={project.web} target="_blank">Ver proyecto</a>
            <a href={project.repositorio} target="_blank">Ver Repositorio</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


export default Projects;