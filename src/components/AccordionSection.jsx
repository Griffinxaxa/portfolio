import { useEffect, useRef } from 'react';
import anime from 'animejs';

const ICONS = {
  user: '👤',
  sparkles: '✦',
  briefcase: '💼',
  code: '⟨/⟩',
  tools: '⚙',
  'graduation-cap': '🎓',
  file: '📄',
};

export default function AccordionSection({ id, icon, title, color, live, defaultOpen, children }) {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: sectionRef.current,
            opacity: [0, 1],
            translateX: [-30, 0],
            duration: 700,
            easing: 'easeOutExpo',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (e) => {
    const details = e.currentTarget;
    if (details.open && innerRef.current) {
      anime({
        targets: innerRef.current,
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 450,
        easing: 'easeOutQuad',
      });
    }
  };

  return (
    <section id={id} className={`section accent-border-${color}`} ref={sectionRef} style={{ opacity: 0 }}>
      <details open={defaultOpen} onToggle={handleToggle}>
        <summary className={`section-summary accent-bg-${color}`}>
          <span className="summary-arrow">→</span>
          <span className="summary-icon">{ICONS[icon] || '•'}</span>
          <span className="summary-title">{title}</span>
          {live && <span className="live-dot" />}
        </summary>
        <div className="section-inner" ref={innerRef}>
          {children}
        </div>
      </details>
    </section>
  );
}
