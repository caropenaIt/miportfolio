import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Si te interesa contratarme o pedirme que te realice algún proyecto, búscame en cualquiera de estos medios:</p>
      <ul>
      <li><img src="./src/assets/email-logo.png" alt="email" className='loguitos'/> Email:<a href="mailto:caropena000@gmail.com">caropena000@gmail.com</a></li>
      <li><img src="./src/assets/linkedin-logo.png" alt="linkedin" className='loguitos' /> LinkedIn:<a href="https://www.linkedin.com/in/carolina-pena-astigarraga/" target='blank'>Carolina Pena Astigarraga</a></li>
      <li><img src="./src/assets/github-logo.png" alt="github" className='loguitos' /> GitHub:<a href="https://github.com/caropenaIt" target='blank'>caropenaIt</a></li>
      <li><img src="./src/assets/whatsapp-logo.png" alt="whatsapp" className='loguitos'/> WhatsApp:<a href="https://wa.me/+5491144928350"target='blank'>+5491144928350</a></li>
      </ul>
    </section>

  );

};

export default Contact;
