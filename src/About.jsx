import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>Quién soy</h2>
      
      <div className="contact-section">
</div>
      <div className='retrato'>
        <img src="./src/assets/mi-foto-cv.png" alt="yo" />
        <div className='retratoBis'>
        <p>¡Hola! Soy Carolina Alejandra Pena Astigarraga. Soy desarrolladora web frontend y Tester QA manual de Pilar, Buenos Aires, Argentina. Soy una apasionada por crear experiencias web modernas, funcionales y accesibles. Además, junto a mis habilidades como QA, se convierte en un complemento ideal que me permite garantizar la calidad y el
    correcto funcionamiento de las aplicaciones y webs que desarrollo. Si buscas alguien con atención al detalle, habilidades técnicas, leal, compañera y con gran compromiso con la excelencia, estaré encantada de colaborar contigo en proyectos y/o cualquier puesto en el que necesites mi presencia en esas áreas.</p>
    <p>Si quieres saber más sobre mí y sobre lo que sé hacer, visita mi GitHub y LinkedIn.👇👇👇</p>
        <div className='boton'>
          <a href="https://github.com/caropenaIt"target='blank'>Mi GitHub</a>
          <a href="https://www.linkedin.com/in/carolina-pena-astigarraga/" target="blank">Mi LinkedIn</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;