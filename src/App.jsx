import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Showcase from './components/Showcase/Showcase';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-apple-bg text-apple-text">
      <Navbar />
      <main className="flex-grow pt-14">
        <Hero />
        <Showcase />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
