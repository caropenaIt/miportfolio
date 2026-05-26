import React from 'react';
import './styles/About.css';
const About = () => {
  return (
    <section id="about">
      <h2>¿Quién soy?</h2>
      <div className='retrato'>
        <img src="assets/mi-foto-cv.png" alt="yo" />
        <div className='retratoBis'>
        <p>¡Hola! Me llamo Carolina Alejandra Pena Astigarraga. Soy Desarrolladora Web Frontend React JS y Tester QA de Pilar, Buenos Aires, Argentina. Soy una apasionada por crear experiencias web modernas, funcionales y accesibles. Además, junto a mis habilidades como QA, se convierte en un complemento ideal que me permite garantizar la calidad y el
    correcto funcionamiento de las aplicaciones y webs que desarrollo. Si buscas alguien con atención al detalle, habilidades técnicas, leal, compañera y con gran compromiso con la excelencia, estaré encantada de colaborar contigo en proyectos y/o cualquier puesto en el que necesites mi presencia en esas áreas.</p>
    <p>Si quieres saber más sobre mí y sobre lo que sé hacer; descarga mi CV, visita mi GitHub y LinkedIn.</p>
        <div className='boton'>
          <a href="https://github.com/caropenaIt"target='blank'>Mi GitHub</a>
          <a href="https://www.linkedin.com/in/carolina-pena-astigarraga/" target="blank">Mi LinkedIn</a>
          <a href="assets/CV_FrontendDev_QA_Carolina_Pena_Astigarraga.pdf" download>Descargar CV</a>
        </div>
      </div>
    </div>

</section>
  );
};

export default About;