import React from 'react';
import frontend from './data/frontend.json'; 


const Projects = () => {
  return (

    <section id="projects">

      <h2>Mis páginas web</h2>
      <p>Mis sitios web y web-apps que he desarrollado hasta el momento(incluyendo el portfolio).</p>
      <div className='tarjetitas'>
        {frontend.map((project) => (
          <article key={project.id}>
            <h4>{project.nombre}</h4>
            <img src={project.imagen} alt={project.nombre} />
            <p>{project.descripcion}</p>
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