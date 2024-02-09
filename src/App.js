import { useEffect, useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Resume from './Components/Resume';
import ScrollButton from './Components/ScrollButton';
import Services from './Components/Services';
import Project from './Components/Project';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = null;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      if (scrollTop > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className='w-full h-fit overflow-hidden'>
      <ScrollButton progress={{ showScrollButton, scrollProgress }} />
      <Nav scroll={{ isScrolled, scrollToSection, activeSection }} />
      <section id='home' ><Home /></section>
      <section id='about' ><About scrollToSection={scrollToSection} /></section>
      <section id='resume' ><Resume /></section>
      <section id='services' ><Services scrollToSection={scrollToSection} /></section>
      <section id='project' ><Project /></section>
      <section id='contact' ><Contact /></section>
      <Footer />
    </main>
  );
}

export default App;
