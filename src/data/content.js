const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: 'Griffin DesRoches',
  prompt: 'user@Griffin:~$',
  subtitle: 'Freshman @ UMass Amherst • Statistics & Computer Science',
  email: 'griffinhaha1@gmail.com',
  links: [
    { href: 'mailto:griffinhaha1@gmail.com', icon: 'envelope', label: 'Email', color: 'yellow' },
    { href: 'https://linkedin.com/in/griffindesroches', icon: 'linkedin', label: 'LinkedIn', color: 'blue' },
    { href: 'https://github.com/griffinxaxa', icon: 'github', label: 'GitHub', color: 'violet' },
    { href: 'https://instagram.com/griffindesroches', icon: 'instagram', label: 'Instagram', color: 'magenta' },
  ],
  sound: `${BASE}sounds/Griffin_De_roasche_Brian.wav`,
  favicon: `${BASE}images/download.jpeg`,
  resume: `${BASE}images/GDesRoches-siteresume.pdf`,
};

export const navItems = [
  { id: 'about', label: 'About', color: 'cyan' },
  { id: 'now', label: 'Now', color: 'red' },
  { id: 'work', label: 'Experience', color: 'orange' },
  { id: 'projects', label: 'Projects', color: 'violet' },
  { id: 'skills', label: 'Skills', color: 'green' },
  { id: 'coursework', label: 'Coursework', color: 'yellow' },
  { id: 'resume', label: 'Resume', color: 'blue' },
];

export const sections = {
  about: {
    icon: 'user',
    title: 'About',
    color: 'cyan',
    content:
      'Freshman at the University of Massachusetts Amherst studying Statistics and Computer science. Interested in machine learning, startup culture and statistical problem solving. Trying to absorb new information every day! From Cambridge, MA. (he/him/his)',
    footnote: { href: 'https://pronouns.org/he-him', label: '1' },
  },
  now: {
    icon: 'sparkles',
    title: "What I'm Up To Now",
    color: 'red',
    live: true,
    content: [
      {
        date: 'September 2025',
        text: 'I am really trying to choose if I want to pursue breadth or depth in my degree, I was thinking of doing a double major in Computer Science. This has really been the most excited I have been to build projects, of course this happens right as I start getting swamped by college work, very conflicted right now!',
      },
    ],
  },
  work: {
    icon: 'briefcase',
    title: 'Work Experience',
    color: 'orange',
    jobs: [
      { title: 'Software Engineering Intern', company: 'Dana Farber Cancer Institute', location: 'Boston, MA', dates: 'Feb 2025 – May 2025' },
      { title: 'AP Physics Teaching Assistant', company: 'Cambridge Public Schools', location: 'Cambridge, MA', dates: 'Sep 2024 – Jan 2025' },
      { title: 'Information Technology Intern', company: 'City of Somerville', location: 'Somerville, MA', dates: 'Jun 2024 – Sep 2024' },
      { title: 'Software Engineering Intern', company: 'Innovators for Purpose', location: 'Cambridge, MA', dates: 'Jul 2023 – Nov 2023' },
    ],
  },
  projects: {
    icon: 'code',
    title: 'Projects',
    color: 'violet',
    items: [
      {
        title: 'CS2 Match Forecaster',
        tech: 'Machine Learning',
        description:
          'A predictive analytics platform for professional Counter-Strike 2 matches, leveraging comprehensive statistics scraped from HLTV.org. Implementing ensemble methods and feature engineering to achieve competitive prediction accuracy.',
        status: 'Work in Progress',
      },
    ],
  },
  skills: {
    icon: 'tools',
    title: 'Technical Skills',
    color: 'green',
    items: [
      { label: 'Programming Languages', value: 'Java, Python, R, HTML/CSS', color: 'blue' },
      { label: 'Development Tools', value: 'Node.js, Express, Git, VS Code, PyCharm, R Studio, IntelliJ', color: 'violet' },
      { label: 'Systems & Environment', value: 'Unix Shell, Vim/Neovim, Windows, macOS, Linux', color: 'cyan' },
      { label: 'Data Science & ML', value: 'Pandas, NumPy, SuperLearner, Shiny', color: 'magenta' },
      { label: 'Languages', value: 'English (Native), Spanish (Intermediate), Romanian (Beginner)', color: 'yellow' },
      { label: 'Deployment', value: 'Vercel', color: 'green' },
    ],
  },
  coursework: {
    icon: 'graduation-cap',
    title: 'Academic Coursework',
    color: 'yellow',
    terms: [
      { term: 'Summer 2025', courses: ['MAT 235: Introduction to Linear Algebra'] },
      {
        term: 'Fall 2025',
        courses: [
          'MAT 132: Calculus II',
          'CICS 160: Object Oriented Programming',
          'Info 248: Intro. Data Science',
          'CICS 250: Intro. Computation (Discrete Math)',
        ],
      },
    ],
  },
};
