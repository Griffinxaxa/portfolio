import { useEffect, useState } from 'react';
import anime from 'animejs';
import BackgroundOrbs from './components/BackgroundOrbs';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import './styles/App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = ['about', 'now', 'work', 'projects', 'skills', 'coursework', 'resume'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    anime({
      targets: '.footer-text',
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 1200,
      easing: 'easeOutQuad',
    });
  }, []);

  return (
    <>
      <BackgroundOrbs />
      <Header />
      <Navigation activeSection={activeSection} />
      <MainContent />
      <footer className="footer">
        <p className="footer-text" style={{ opacity: 0 }}>
          &copy; {new Date().getFullYear()} Griffin DesRoches. Special thanks to Dr. Wu &amp; Dr. Tupper!
        </p>
      </footer>
    </>
  );
}
