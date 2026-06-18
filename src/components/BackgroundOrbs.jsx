import { useEffect, useRef } from 'react';
import anime from 'animejs';

const ORBS = [
  { color: 'var(--yellow)', size: 280, x: '8%', y: '12%', delay: 0 },
  { color: 'var(--cyan)', size: 220, x: '82%', y: '8%', delay: 400 },
  { color: 'var(--magenta)', size: 180, x: '75%', y: '55%', delay: 800 },
  { color: 'var(--violet)', size: 240, x: '5%', y: '65%', delay: 200 },
  { color: 'var(--green)', size: 160, x: '45%', y: '85%', delay: 600 },
  { color: 'var(--orange)', size: 140, x: '55%', y: '25%', delay: 1000 },
];

export default function BackgroundOrbs() {
  const containerRef = useRef(null);

  useEffect(() => {
    const orbs = containerRef.current?.querySelectorAll('.orb');
    if (!orbs?.length) return;

    orbs.forEach((orb, i) => {
      anime({
        targets: orb,
        translateX: () => anime.random(-40, 40),
        translateY: () => anime.random(-30, 30),
        scale: [{ value: 1 }, { value: 1.15 }, { value: 0.95 }, { value: 1 }],
        duration: 6000 + i * 800,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
        delay: ORBS[i].delay,
      });
    });
  }, []);

  return (
    <div className="bg-orbs" ref={containerRef} aria-hidden="true">
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color}55 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}
