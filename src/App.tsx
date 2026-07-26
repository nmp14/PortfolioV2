import { useEffect, useState } from "react";

type Project = {
  name: string;
  number: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    name: "Code Pub",
    number: "01",
    image: "./images/code-pub.png",
    description:
      "A full-stack restaurant and commerce experience built by a five-person team. I led the product direction and built authentication, the merchandise store, and core database architecture.",
    tags: ["React", "Redux", "Node", "Sequelize"],
    github: "https://github.com/NDHR-Magic/Code-Pub",
  },
  {
    name: "Stiegman Lab",
    number: "02",
    image: "./images/stiegman-lab.png",
    description:
      "A purpose-built chemical inventory system for a research lab at Florida State University, designed around the way working scientists actually manage materials.",
    tags: ["JavaScript", "Express", "Sequelize"],
    github: "https://github.com/nmp14/Tony-Doesnt-Care",
  },
  {
    name: "Employee Directory",
    number: "03",
    image: "./images/employee-directory.png",
    description:
      "A responsive React directory that turns generated people data into a fast, sortable, searchable interface.",
    tags: ["React", "Node", "Axios"],
    github: "https://github.com/nmp14/Employee-Directory",
    live: "https://nmp14.github.io/Employee-Directory/",
  },
  {
    name: "BudgeGrub",
    number: "04",
    image: "./images/budgegrub.png",
    description:
      "A playful budgeting assistant that connects your real monthly spending power to nearby restaurant options.",
    tags: ["JavaScript", "Yelp API", "Local Storage"],
    github: "https://github.com/BudgeGrub/Budgegrub",
    live: "https://www.youtube.com/watch?v=RPriWCY9QIw",
  },
];

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "SQL",
  "MongoDB",
  "Product thinking",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↓"}</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, activeProject]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="site-header">
        <button className="wordmark" onClick={() => goTo("home")} aria-label="Go home">
          NP<span className="dot">.</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => goTo("work")}>Work</button>
          <button onClick={() => goTo("about")}>About</button>
          <a href="mailto:nmp14fsu@gmail.com">Contact</a>
        </nav>
        <button
          className="menu-button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-kicker">
          <span>Software engineer</span>
          <span>Florida, USA</span>
        </div>
        <h1>
          I turn complex
          <br />
          problems into
          <br />
          <em>clear experiences.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I’m Nathan Peek—a scientist turned software engineer who brings
            rigorous thinking, genuine curiosity, and a bias toward building.
          </p>
          <button className="circle-link" onClick={() => goTo("work")} aria-label="View selected work">
            <Arrow />
          </button>
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2021—Present</p>
          <h2>Things I’ve built.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.name}>
              <button className="project-main" onClick={() => setActiveProject(project)}>
                <span className="project-number">{project.number}</span>
                <span className="project-title">{project.name}</span>
                <span className="project-arrow"><Arrow diagonal /></span>
              </button>
              <div className="project-preview">
                <img src={project.image} alt="" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <p className="eyebrow">About / The short version</p>
          <div className="portrait-wrap">
            <img src="./images/nathan-peek.png" alt="Nathan Peek at work" />
          </div>
        </div>
        <div className="about-copy">
          <h2>
            Chemistry taught me to ask
            <em>better questions.</em>
          </h2>
          <div className="about-columns">
            <p>
              Before writing software, I earned a PhD in inorganic chemistry at
              Florida State University, studying catalysts responsible for much
              of the world’s high-density polyethylene.
            </p>
            <p>
              Today I apply that same experimental mindset to digital products:
              break a hard problem down, test thoughtfully, and keep refining
              until the experience feels inevitable.
            </p>
          </div>
          <div className="skills" aria-label="Skills">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Have a difficult problem?</p>
        <h2>Let’s make it <em>simple.</em></h2>
        <a className="contact-link" href="mailto:nmp14fsu@gmail.com">
          Start a conversation <Arrow diagonal />
        </a>
        <footer>
          <span>© {new Date().getFullYear()} Nathan Peek</span>
          <div>
            <a href="https://github.com/nmp14" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/nathan-peek-31b99862/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </section>

      <div className={`menu-overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="close-button" onClick={() => setMenuOpen(false)} aria-label="Close menu">Close</button>
        <div className="menu-links">
          <button onClick={() => goTo("home")}>Home</button>
          <button onClick={() => goTo("work")}>Work</button>
          <button onClick={() => goTo("about")}>About</button>
          <a href="mailto:nmp14fsu@gmail.com">Contact</a>
        </div>
      </div>

      {activeProject && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-label={activeProject.name}>
          <button className="close-button" onClick={() => setActiveProject(null)} aria-label="Close project">Close</button>
          <div className="modal-grid">
            <div className="modal-visual">
              <span className="project-number">{activeProject.number}</span>
              <img src={activeProject.image} alt={`${activeProject.name} project screenshot`} />
            </div>
            <div className="modal-copy">
              <p className="eyebrow">Selected project</p>
              <h2>{activeProject.name}</h2>
              <p>{activeProject.description}</p>
              <div className="skills">
                {activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="modal-links">
                <a href={activeProject.github} target="_blank" rel="noreferrer">View source <Arrow diagonal /></a>
                {activeProject.live && <a href={activeProject.live} target="_blank" rel="noreferrer">View project <Arrow diagonal /></a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
