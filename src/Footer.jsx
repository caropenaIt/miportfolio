import React from "react";
import { Link } from 'react-router-dom';
import './styles/Footer.css';
const Footer = () => {
    return(
    <footer>
        <img src="assets/logo-dos.png" alt="Logo" className='logo' />
        <div className="retratoBis boton">
        <p>Sitio web diseñado por y para Carolina Alejandra Pena Astigarraga. Todos los derechos reservados 2026.</p>
        <Link to="/">Volver al inicio</Link>
        </div>
    </footer>
)
}

export default Footer;