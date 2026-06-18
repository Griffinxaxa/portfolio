import { useEffect, useRef } from 'react';
import anime from 'animejs';
import AccordionSection from './AccordionSection';
import { sections, profile } from '../data/content';

function JobItem({ job, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: ref.current,
            opacity: [0, 1],
            translateX: [20, 0],
            duration: 500,
            delay: index * 100,
            easing: 'easeOutQuad',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <details className="job-details" ref={ref} style={{ opacity: 0 }}>
      <summary className="job-summary">
        <span className="job-title">{job.title}</span>
        <span className="job-company">{job.company}</span>
      </summary>
      <div className="job-content">
        <p>
          <em>
            {job.location} • {job.dates}
          </em>
        </p>
      </div>
    </details>
  );
}

export default function MainContent() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && skillsRef.current) {
          anime({
            targets: skillsRef.current.querySelectorAll('.skill-card'),
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: anime.stagger(80),
            duration: 600,
            easing: 'easeOutBack',
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="main">
      <AccordionSection id="about" icon={sections.about.icon} title={sections.about.title} color={sections.about.color} defaultOpen>
        <p>
          {sections.about.content}
          <sup>
            <a href={sections.about.footnote.href} target="_blank" rel="noopener noreferrer">
              {sections.about.footnote.label}
            </a>
          </sup>
        </p>
      </AccordionSection>

      <AccordionSection id="now" icon={sections.now.icon} title={sections.now.title} color={sections.now.color} live>
        {sections.now.content.map((item) => (
          <p key={item.date}>
            <strong>{item.date}:</strong> {item.text}
          </p>
        ))}
      </AccordionSection>

      <AccordionSection id="work" icon={sections.work.icon} title={sections.work.title} color={sections.work.color}>
        {sections.work.jobs.map((job, i) => (
          <JobItem key={job.company} job={job} index={i} />
        ))}
      </AccordionSection>

      <AccordionSection id="projects" icon={sections.projects.icon} title={sections.projects.title} color={sections.projects.color}>
        {sections.projects.items.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>
              <strong>Technologies:</strong> {project.tech}
            </p>
            <p>{project.description}</p>
            <p>
              <em>Status: {project.status}</em>
            </p>
          </div>
        ))}
      </AccordionSection>

      <AccordionSection id="skills" icon={sections.skills.icon} title={sections.skills.title} color={sections.skills.color}>
        <ul className="skills-grid" ref={skillsRef}>
          {sections.skills.items.map((skill) => (
            <li key={skill.label} className={`skill-card accent-bg-${skill.color}`} style={{ opacity: 0 }}>
              <strong>{skill.label}</strong>
              <span>{skill.value}</span>
            </li>
          ))}
        </ul>
      </AccordionSection>

      <AccordionSection id="coursework" icon={sections.coursework.icon} title={sections.coursework.title} color={sections.coursework.color}>
        {sections.coursework.terms.map((term) => (
          <div key={term.term} className="coursework-term">
            <p>
              <strong>{term.term}</strong>
            </p>
            {term.courses.map((course) => (
              <p key={course}>{course}</p>
            ))}
          </div>
        ))}
      </AccordionSection>

      <AccordionSection id="resume" icon="file" title="Resume" color="blue">
        <a href={profile.resume} className="resume-link" target="_blank" rel="noopener noreferrer">
          <span className="resume-icon">↓</span>
          View Resume (PDF)
        </a>
      </AccordionSection>
    </main>
  );
}
