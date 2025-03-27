import { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Button,
  Card,
  Carousel,
  Dropdown,
} from "react-bootstrap";
import FileSaver from "file-saver";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import "./Home.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Multilingual content
const content = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      tools: "Tools",
      contact: "Contact",
    },
    hero: {
      hello: "Hello, I'm",
      role: "Full Stack Developer",
      description:
        "I build exceptional digital experiences with modern web technologies.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
    },
    skills: {
      title: "My Skills",
      subtitle: "Technologies I work with",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      devops: "DevOps",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Some of my recent work",
      viewProject: "View Project",
    },
    // Tambahkan dalam const content
    tools: {
      title: 
       "Tools & Technologies",
      subtitle: "My daily development tools"
      
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's work together",
      email: "Email",
      phone: "Phone",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      skills: "Keahlian",
      projects: "Proyek",
      tools: "Alat",
      contact: "Kontak",
    },
    hero: {
      hello: "Halo, saya",
      role: "Pengembang Full Stack",
      description:
        "Saya membangun pengalaman digital yang luar biasa dengan teknologi web modern.",
      downloadCV: "Unduh CV",
      viewProjects: "Lihat Proyek",
    },
    skills: {
      title: "Keahlian Saya",
      subtitle: "Teknologi yang saya gunakan",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      devops: "DevOps",
    },
    tools: {
      title: 
        "Alat & Teknologi"
      ,
      subtitle: 
       
        "Alat-alat pengembangan yang saya gunakan"
      ,
    },
    projects: {
      title: "Proyek Unggulan",
      subtitle: "Beberapa karya terbaru saya",
      viewProject: "Lihat Proyek",
    },
    contact: {
      title: "Hubungi Saya",
      subtitle: "Mari bekerja sama",
      email: "Email",
      phone: "Telepon",
    },
    footer: {
      rights: "Hak cipta dilindungi",
    },
  },
};

// Project data
const projectsData = [
  {
    title: "Ecommerce Taman Komunikasi",
    description: {
      en: "Comprehensive e-commerce platform for Catholic communication products with payment gateway, shipping integration, and admin dashboard",
      id: "Platform e-commerce lengkap untuk produk komunikasi Katolik dengan gateway pembayaran, integrasi pengiriman, dan dashboard admin"
    },
    image: "/img/takom.png",
    link: "https://takomkanisius.id/",
    technologies: ["Laravel", "ReactJS", "Midtrans", "RajaOngkir", "REST API", "Tailwind"],
  },
  {
    title: "Ecommerce Batik Kaliagung",
    description: {
      en: "Online store for traditional Javanese batik with product customization and local payment options",
      id: "Toko online untuk batik Jawa tradisional dengan kustomisasi produk dan pilihan pembayaran lokal"
    },
    image: "/img/batik.png",
    link: "https://batikkaliagung.com/",
    technologies: ["Laravel", "Midtrans", "RestAPI", "Bootstrap"],
  },
  {
    title: "Website Profile Iwak Mas Trans",
    description: {
      en: "Travel company website with tour ",
      id: "Website perusahaan travel "
    },
    image: "/img/iwakmas.png",
    link: "https://iwakmastrans.com/",
    technologies: ["Laravel", "Bootstrap"],
  },
  {
    title: "Koperasi Palwakencana",
    description: {
      en: "Cooperative management system with member registration, savings, and loan features",
      id: "Sistem manajemen koperasi dengan fitur pendaftaran anggota, simpanan, dan pinjaman"
    },
    image: "/img/palwakencana.png",
    link: "https://palwakencana.com/",
    technologies: ["CodeIgniter"],
  },
  {
    title: "B2C PT Kanisius",
    description: {
      en: "Royalty notification system for authors with automatic calculation and reporting features",
      id: "Sistem notifikasi royalty untuk pengarang dengan fitur perhitungan otomatis dan pelaporan"
    },
    image: "/img/royalty.png",
    link: "https://mitra.kanisiusmedia.co.id/",
    technologies: ["CodeIgniter", "API", "Fonte", "SMTP"],
  },
  {
    title: "Sistem Seleksi Karyawan",
    description: {
      en: "Employee recruitment system with online tests, scoring, and candidate management",
      id: "Sistem rekrutmen karyawan dengan tes online, penilaian, dan manajemen kandidat"
    },
    image: "/img/seleksi.png",
    link: "https://seleksi.kanisiusmedia.co.id/",
    technologies: ["CodeIgniter", "API", "Fonte", "SMTP"],
  }
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  // Load preferences from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    const savedLanguage = localStorage.getItem("language") || "en";

    setDarkMode(savedDarkMode);
    applyTheme(savedDarkMode);
    setLanguage(savedLanguage);
    setIsVisible(true);
  }, []);

  const applyTheme = (isDark) => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  };

  // Save preferences to localStorage
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    applyTheme(newMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const saveFile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/assets/cv.pdf",
      "CV_Chandra-Agusta.pdf"
    );
  };

  return (
    <div data-theme={darkMode ? "dark" : "light"} className="app-container">
      {/* Navbar */}
      <Navbar expand="lg" className="modern-navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <span className="brand-logo">CA</span>
            <span className="brand-name">Chandra Agusta</span>
          </Navbar.Brand>

          <div className="navbar-controls">
            <Button
              variant="link"
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label={
                darkMode
                  ? content[language].nav.lightMode
                  : content[language].nav.darkMode
              }
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </Button>

            <Dropdown className="language-selector">
              <Dropdown.Toggle variant="link" id="dropdown-language">
                <FaGlobe size={20} />
                <span className="ms-1">{language.toUpperCase()}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("en")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("id")}>
                  Indonesia
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link">
                {content[language].nav.home}
              </Nav.Link>
              {/* <Nav.Link href="#skills" className="nav-link">
                {content[language].nav.skills}
              </Nav.Link> */}
              <Nav.Link href="#projects" className="nav-link">
                {content[language].nav.projects}
              </Nav.Link>
              <Nav.Link href="#tools" className="nav-link">
                {content[language].nav.tools}
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link">
                {content[language].nav.contact}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}

      <section className="hero-section" id="home">
        <Container>
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            {/* Konten (akan muncul di bawah pada mobile) */}
            <Col lg={6} className="hero-content order-2 order-lg-1">
              <div className={`hero-text ${isVisible ? "visible" : ""}`}>
                <h4 className="hero-subtitle">
                  {content[language].hero.hello}
                </h4>
                <h1 className="hero-title">Chandra Agusta</h1>
                <h2 className="hero-role">{content[language].hero.role}</h2>
                <p className="hero-description">
                  {content[language].hero.description}
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary" onClick={saveFile}>
                    {content[language].hero.downloadCV}
                  </button>
                  <a href="#projects" className="btn-secondary">
                    {content[language].hero.viewProjects}
                  </a>
                </div>
              </div>
            </Col>

            {/* Foto (akan muncul di atas pada mobile) */}
            <Col
              lg={6}
              className="hero-image-col order-1 order-lg-2 mb-4 mb-lg-0"
            >
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img
                    src={process.env.PUBLIC_URL + "/img/fotoDiri.png"}
                    alt="Foto Diri"
                    className="hero-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      {/* <section className="skills-section" id="skills">
        <Container>
          <div className="section-header">
            <h2 className="section-title">{content[language].skills.title}</h2>
            <p className="section-subtitle">
              {content[language].skills.subtitle}
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>{content[language].skills.frontend}</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <img src="/icons/react.png" alt="React" />
                  <span>React.js</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/javascript.png" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>{content[language].skills.backend}</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <img src="/icons/laravel.png" alt="Laravel" />
                  <span>Laravel</span>
                </div>
                <div className="skill-item">
                  <img src="/icons/php.png" alt="PHP" />
                  <span>PHP</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <Container>
          <div className="section-header">
            <h2 className="section-title">
              {content[language].projects.title}
            </h2>
            <p className="section-subtitle">
              {content[language].projects.subtitle}
            </p>
          </div>

          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {projectsData.map((project, idx) => (
              <Carousel.Item key={idx}>
                <div className="project-card">
                  <Row>
                    <Col md={6} className="project-image-col">
                      <div className="project-image-container">
                        <img
                          src={`${process.env.PUBLIC_URL}${project.image}`}
                          alt={project.title}
                          className="project-image"
                        />
                      </div>
                    </Col>
                    <Col md={6} className="project-content-col">
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">
                          {project.description[language]}
                        </p>

                        <div className="tech-tags">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="project-actions">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            {content[language].projects.viewProject}
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Tools Section */}
      <section className="tools-section" id="tools">
        <Container>
          <div className="section-header">
            <h2 className="section-title">{content[language].tools.title}</h2>
            <p className="section-subtitle">
              {content[language].tools.subtitle}
            </p>
          </div>

          <div className="tools-grid">
            {/* React */}
            <div className="tool-item">
              <i className="bi bi-filetype-jsx text-primary"></i>
              <span>React</span>
            </div>

            {/* Laravel */}
            <div className="tool-item">
              <i className="bi bi-filetype-php text-danger"></i>
              <span>Laravel</span>
            </div>

            {/* CodeIgniter */}
            <div className="tool-item">
              <i className="bi bi-filetype-php"></i>
              <span>CodeIgniter</span>
            </div>

            {/* MySQL */}
            <div className="tool-item">
              <i className="bi bi-database text-warning"></i>
              <span>MySQL</span>
            </div>

            {/* Python */}
            <div className="tool-item">
              <i className="bi bi-filetype-py text-info"></i>
              <span>Python</span>
            </div>

            {/* PHP */}
            <div className="tool-item">
              <i className="bi bi-filetype-php text-primary"></i>
              <span>PHP</span>
            </div>

            {/* JavaScript */}
            <div className="tool-item">
              <i className="bi bi-filetype-js text-warning"></i>
              <span>JavaScript</span>
            </div>

            {/* CSS */}
            <div className="tool-item">
              <i className="bi bi-filetype-css text-primary"></i>
              <span>CSS</span>
            </div>

            {/* HTML */}
            <div className="tool-item">
              <i className="bi bi-filetype-html text-danger"></i>
              <span>HTML</span>
            </div>

            {/* Java */}
            <div className="tool-item">
              <i className="bi bi-filetype-java text-danger"></i>
              <span>Java</span>
            </div>

            {/* Figma */}
            <div className="tool-item">
              <i className="bi bi-palette text-pink"></i>
              <span>Figma</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <Container>
          <div className="section-header">
            <h2 className="section-title">{content[language].contact.title}</h2>
            <p className="section-subtitle">
              {content[language].contact.subtitle}
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>{content[language].contact.email}</h4>
                  <a href="mailto:agustachandra1@gmail.com">
                    agustachandra1@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="bi bi-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>{content[language].contact.phone}</h4>
                  <a href="tel:+6287771682765">+62 877-7168-2765</a>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ChandrAgusta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/chandraagusta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/chaandragusta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      {/* <footer className="modern-footer">
        <Container>
          <div className="footer-content">
            <div className="footer-logo">
              <span>CA</span>
            </div>
            <div className="footer-links">
              <a href="#home">{content[language].nav.home}</a>
              <a href="#skills">{content[language].nav.skills}</a>
              <a href="#projects">{content[language].nav.projects}</a>
              <a href="#contact">{content[language].nav.contact}</a>
            </div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Chandra Agusta. {content[language].footer.rights}
            </div>
          </div>
        </Container>
      </footer> */}
    </div>
  );
}

export default Home;
