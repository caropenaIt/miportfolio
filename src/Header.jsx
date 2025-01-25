import React from 'react';


const Header = () => {
  return (
    <header>
      <img src="./src/assets/logo-dos.png" alt="Logo" className='logo' />
      <h1>Carolina Alejandra Pena Astigarraga</h1>
      <h3>Portfolio: Desarrollador Frontend - Tester QA Manual</h3>
      <nav>
        <a href="#about">Quién soy</a>
        <a href="#projects">Mis páginas web</a>
        <a href="#testing">Proyectos de Testing</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;