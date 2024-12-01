import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { classData } from './classData';  

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Classes classList={classData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
