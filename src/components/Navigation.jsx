import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { navItems } from '../data/content';

export default function Navigation({ activeSection }) {
  const navRef = useRef(null);

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('.nav-link');
    anime({
      targets: links,
      opacity: [0, 1],
      translateY: [-16, 0],
      delay: anime.stagger(60),
      duration: 500,
      easing: 'easeOutQuad',
    });
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    const details = section.querySelector('details');
    if (details && !details.open) {
      details.open = true;
      anime({
        targets: section.querySelector('.section-inner'),
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 400,
        easing: 'easeOutQuad',
      });
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="nav" ref={navRef}>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`nav-link accent-${item.color}${activeSection === item.id ? ' active' : ''}`}
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
