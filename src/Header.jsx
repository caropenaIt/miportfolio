import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
const Header = () => {
  return (
    <header>
      <img src="/assets/logo-dos.png" alt="Logo" className='logo' />
      <Link to="/"></Link>
      <h1>Carolina Alejandra Pena Astigarraga</h1>
      <h3>Portfolio: Desarrollador Frontend React JS - Tester QA</h3>
      <nav>
        <Link to="/about">Quién soy</Link>
        <Link to="/projects">Mis páginas web</Link>
        <Link to="/testing">Proyectos de Testing</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;