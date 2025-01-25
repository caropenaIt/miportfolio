import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Testing from './Testing';
import Contact from './Contact';
import Footer from './Footer';
import frontend from './data/frontend.json'; 
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Testing />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;