import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Testing from './Testing';
import Contact from './Contact';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;