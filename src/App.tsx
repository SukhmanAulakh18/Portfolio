import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;