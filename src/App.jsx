import React, { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, BookOpen, Check, ChevronRight, Cloud, Code2, Database, Download, Github, GraduationCap, Layers3, Linkedin, Mail, Menu, Monitor, Server, ShieldCheck, Sparkles, Terminal, X } from 'lucide-react'
import { projects } from './data/projects'
import { skillGroups } from './data/skills'

const email = 'sadilapunchihewa03@gmail.com'
const github = 'https://github.com/sadilapunchihewa'
const linkedin = 'https://www.linkedin.com/in/sadila-punchihewa-4a112920b/'
const cv = '/Sadila-Punchihewa-CV.pdf'
const nav = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Education', 'education'], ['Contact', 'contact']]

function IconLink({ href, label, children }) {
  return <a className="icon-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>{children}</a>
}

function SectionHeading({ kicker, title, description, center = false }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}>
    <span className="eyebrow"><span className="eyebrow-line" />{kicker}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>
}

function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const marker = window.innerHeight * .32
      let current = 'home'
      for (const [, id] of nav) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact'
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <nav className="nav-shell container" aria-label="Main navigation">
      <a href="#home" className="brand" onClick={() => { setActive('home'); setOpen(false) }} aria-label="Sadila Punchihewa, home"><span className="brand-mark">S<span>P</span><i>.</i></span><span className="brand-name">Sadila Punchihewa</span></a>
      <div className="desktop-nav">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setActive(id)}>{label}</a>)}
      </div>
      <a className="nav-cv" href={cv} download><Download size={15} strokeWidth={2.2} /> Download CV</a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
    </nav>
    <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} inert={!open}>
      {nav.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => { setActive(id); setOpen(false) }}>{label}<ArrowUpRight size={17} /></a>)}
      <a className="mobile-cv" href={cv} download onClick={() => setOpen(false)}><Download size={17} /> Download CV</a>
    </div>
  </header>
}

function PortraitVisual() {
  return <div className="hero-visual portrait-visual">
    <div className="portrait-frame">
      <img src="/images/ChatGPT Image Sep 18, 2026, 02_26_42 PM.png" alt="Portrait of Sadila Punchihewa at a desk" fetchPriority="high" />
      <div className="portrait-shade" />
      <div className="portrait-caption"><span className="portrait-caption-dot" /><span>Open to opportunities<br /><strong>Software Engineering Internships</strong></span></div>
    </div>
    <div className="portrait-accent" aria-hidden="true" />
  </div>
}

function Hero() {
  return <section id="home" className="hero section-anchor">
    <div className="hero-grid" />
    <div className="container hero-inner">
      <div className="hero-copy">
        <div className="availability"><span className="pulse-dot" /> Available for Software Engineering Internship</div>
        <h1>Hi, I’m <span>Sadila<br className="desktop-break" /> Punchihewa.</span></h1>
        <p className="hero-role">Software Engineering Undergraduate <span>/</span> Full-Stack Developer</p>
        <p className="hero-description">I build reliable, user-focused software and turn real-world problems into modern web applications.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">View My Work <ArrowUpRight size={17} /></a><a className="button button-secondary" href={cv} download><Download size={17} /> Download CV</a></div>
        <div className="hero-socials"><span>Find me on</span><IconLink href={github} label="Sadila on GitHub"><Github size={19} /></IconLink><IconLink href={linkedin} label="Sadila on LinkedIn"><Linkedin size={19} /></IconLink></div>
      </div>
      <PortraitVisual />
    </div>
    <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
  </section>
}

function About() {
  return <section id="about" className="section about-section section-anchor"><div className="container">
    <Reveal><SectionHeading kicker="A little about me" title="Building with purpose, learning with curiosity." /></Reveal>
    <div className="about-layout">
      <Reveal className="about-copy"><p className="lead">I’m a third-year Software Engineering undergraduate at <strong>SLIIT</strong>, pursuing a BSc (Hons) in Information Technology.</p><p>I enjoy translating complex ideas into useful, well-engineered products. Through academic and personal projects, I’ve worked across frontend interfaces, backend APIs, databases and collaborative development workflows.</p><p>Now in my first semester of third year, I’m looking for an internship where I can contribute, learn from an experienced team and keep developing my technical skills.</p><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={17} /></a></Reveal>
      <Reveal className="about-card-wrap"><div className="about-card"><div className="about-card-top"><span className="about-card-icon"><GraduationCap size={25} /></span><span className="tiny-dot" /></div><span className="card-label">Currently</span><h3>3rd Year<br />at SLIIT</h3><p>Software Engineering · GPA 3.58</p><div className="card-divider" /><div className="about-card-bottom"><span>Open to internship opportunities</span><ArrowUpRight size={18} /></div></div><div className="about-side-note"><span className="note-line" />Based in Sri Lanka <span>·</span> Building for the world</div></Reveal>
    </div>
  </div></section>
}

const skillIcons = [Code2, Monitor, Server, Database, Terminal, Layers3]
function Skills() {
  return <section id="skills" className="section skills-section section-anchor"><div className="container">
    <Reveal><SectionHeading kicker="The toolkit" title="Skills I bring to a team." description="Technical foundations and ways of working from my CV." /></Reveal>
    <div className="skills-grid">{skillGroups.map((group, index) => { const Icon = skillIcons[index]; return <Reveal key={group.title} className="skill-card"><div className="skill-head"><span className="skill-icon"><Icon size={20} /></span><h3>{group.title}</h3></div><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></Reveal> })}</div>
  </div></section>
}

function ProjectVisual({ project }) {
  const type = project.visual
  if (project.image) {
    return <div className={`project-visual project-photo ${type}`}>
      <div className="project-photo-frame" style={{ '--project-image': `url("${project.image}")` }}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
    </div>
  }
  return <div className={`project-visual ${type}`} role="img" aria-label={`Illustrative interface preview for ${project.title}`}>
    <div className="preview-glow" />
    <div className="preview-frame">
      <div className="preview-toolbar"><div className="preview-dots"><i /><i /><i /></div><span>Project concept preview</span><span className="preview-toolbar-mark">↗</span></div>
      {type === 'transit' && <div className="preview-body transit-body"><div className="transit-side"><b>TC<span>.</span></b><i /><i /><i /><i /></div><div className="transit-main"><div className="transit-head"><div><small>TRANSITCARE / DASHBOARD</small><h4>Complaint overview</h4></div><span>+ New report</span></div><div className="transit-stats"><div><small>Total reports</small><strong>—</strong></div><div><small>Under review</small><strong>—</strong></div><div><small>Resolved</small><strong>—</strong></div></div><div className="transit-list"><b>Complaint workflow</b><div><span>Passenger submission</span><em>Under review</em></div><div><span>Admin response</span><em>Resolved</em></div></div></div></div>}
      {type === 'bakery' && <div className="preview-body food-body"><div className="food-top"><b>Wijayanandana<span>.</span></b><span>Bakery &nbsp;&nbsp; Lunch &nbsp;&nbsp; Order</span></div><div className="food-heading"><small>HOTEL & BAKERY</small><h4>Made fresh,<br />served with care.</h4></div><div className="food-items"><div className="food-item"><span className="food-plate plate-one">◉</span><b>Bakery favourites</b><small>Browse products</small></div><div className="food-item"><span className="food-plate plate-two">◉</span><b>Lunch menu</b><small>Order on WhatsApp</small></div></div></div>}
      {type === 'automation' && <div className="preview-body automation-body"><div className="automation-top"><span>ARDUINO / HOME CONTROL</span><span className="automation-live"><i /> System online</span></div><div className="automation-title"><small>DEVICE OVERVIEW</small><h4>A smarter home.</h4></div><div className="automation-devices"><div><span>◉</span><b>Lights</b><small>Auto · LDR</small></div><div><span>✺</span><b>Fan</b><small>Remote control</small></div><div><span>◌</span><b>Motion</b><small>PIR active</small></div></div><div className="automation-alert"><span>↗</span><div><b>GSM alert ready</b><small>Motion notifications enabled</small></div><span>Bluetooth connected</span></div></div>}
      {type === 'rental' && <div className="preview-body rental-body"><div className="rental-top"><b>VEHICLE<span> RENTAL</span></b><span>Vehicles &nbsp; Bookings &nbsp; Customers</span></div><div className="rental-content"><div><small>AVAILABILITY & RESERVATIONS</small><h4>Find your<br />next drive.</h4><span className="rental-button">View vehicles →</span></div><div className="car-art"><div className="car-roof" /><div className="car-body" /><i /><i /></div></div><div className="rental-bottom"><span>Vehicle rental system</span><span>Manage bookings with ease</span></div></div>}
    </div>
  </div>
}

function ProjectCard({ project }) {
  return <Reveal className={`project-card ${project.type === 'featured' ? 'featured' : ''}`}>
    <ProjectVisual project={project} />
    <div className="project-info"><div className="project-meta"><span>Project {project.number}</span>{project.type === 'featured' && <span className="featured-pill"><Sparkles size={13} /> Featured</span>}</div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-description">{project.description}</p><div className="project-features">{project.features.map(feature => <span key={feature}><Check size={14} />{feature}</span>)}</div><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>{(project.github || project.demo) && <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={17} /> Live demo</a>}</div>}</div>
  </Reveal>
}

function Projects() {
  return <section id="projects" className="section projects-section section-anchor"><div className="container"><Reveal><div className="projects-intro"><SectionHeading kicker="Selected work" title="Ideas turned into working software." description="A selection of projects spanning full-stack development, useful platforms and practical problem-solving." /><span className="project-count">{projects.length.toString().padStart(2, '0')} PROJECTS</span></div></Reveal><div className="projects-list">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div><Reveal><div className="projects-outro"><span>Want to see more of the process?</span><a className="text-link" href={github} target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={17} /></a></div></Reveal></div></section>
}

function Education() {
  return <section id="education" className="section education-section section-anchor"><div className="container">
    <Reveal><SectionHeading kicker="The foundation" title="Education & direction." /></Reveal>
    <div className="education-layout">
      <Reveal className="education-card">
        <div className="education-top"><span className="edu-icon"><GraduationCap size={25} /></span><span className="edu-years">Expected graduation <strong>2028</strong></span></div>
        <div className="education-line" />
        <span className="edu-status"><span /> 3rd Year · 1st Semester</span>
        <h3>Sri Lanka Institute of<br />Information Technology</h3>
        <p>BSc (Hons) in Information Technology<br /><strong>Software Engineering specialization</strong></p>
        <div className="education-focus"><span>GPA 3.58</span><span>Undergraduate</span></div>
        <div className="prior-education"><span>Earlier education</span><h4>GCE Advanced Level</h4><p>Local Science Stream · January 2024</p></div>
      </Reveal>
      <Reveal className="focus-panel">
        <span className="focus-icon"><BookOpen size={23} /></span>
        <h3>What I’m exploring now</h3>
        <p>Learning beyond the classroom, one project and principle at a time.</p>
        <div className="focus-list">{[['Software Architecture', Layers3], ['Backend Engineering', Server], ['DevOps & CI/CD', Terminal], ['Cloud Platforms', Cloud], ['Artificial Intelligence', Sparkles], ['Industry Best Practices', ShieldCheck]].map(([label, Icon]) => <div key={label}><Icon size={18} /><span>{label}</span><ChevronRight size={16} /></div>)}</div>
        <div className="certifications"><span>Courses & certificates</span><p>English Language Certificate Level 3 course · Aquinas College</p><p>Web Design for Beginners · CODL, University of Moratuwa</p></div>
      </Reveal>
    </div>
  </div></section>
}

function GithubSection() {
  return <section className="github-section"><div className="container"><Reveal><div className="github-panel"><div className="github-panel-icon"><Github size={30} /></div><div><span className="eyebrow">More behind the scenes</span><h2>Curious about the code?</h2><p>Browse my repositories, experiments and the projects I’m building next.</p></div><a className="button button-light" href={github} target="_blank" rel="noopener noreferrer">Explore My GitHub <ArrowUpRight size={17} /></a></div></Reveal></div></section>
}

function Contact() {
  return <section id="contact" className="section contact-section section-anchor"><div className="container"><Reveal><div className="contact-inner"><span className="eyebrow"><span className="eyebrow-line" />Let’s connect</span><h2>Let’s build something<br /><span>together.</span></h2><p>I’m currently looking for Software Engineering internship opportunities and would love to connect with teams working on interesting software products.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${email}`}><Mail size={18} /> Send Email <ArrowUpRight size={16} /></a><a className="button button-secondary" href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a><a className="button button-secondary" href={github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a></div><a className="contact-email" href={`mailto:${email}`}>{email} <ArrowUpRight size={16} /></a></div></Reveal></div></section>
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a href="#home" className="footer-brand">SP<span>.</span></a><span>Designed & Built by Sadila Punchihewa <span className="footer-year">© {new Date().getFullYear()}</span></span><div><IconLink href={github} label="Sadila on GitHub"><Github size={18} /></IconLink><IconLink href={linkedin} label="Sadila on LinkedIn"><Linkedin size={18} /></IconLink></div></div></footer>
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } }), { threshold: .08, rootMargin: '0px 0px -30px 0px' })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><About /><Skills /><Projects /><Education /><GithubSection /><Contact /></main><Footer /></>
}
