import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  return (
    <header>
      <img src="/assets/logo-dos.png" alt="Logo" className='logo' />
      <h1>Carolina Alejandra Pena Astigarraga</h1>
      <h3>Portfolio: Desarrollador Frontend React JS/Astro - Tester QA</h3>
      <nav>
        <Link to="/" className={isActive('/')}>Quién soy</Link>
        <Link to="/projects" className={isActive('/projects')}>Mis páginas web</Link>
        <Link to="/testing" className={isActive('/testing')}>Proyectos de Testing</Link>
        <Link to="/contact" className={isActive('/contact')}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;