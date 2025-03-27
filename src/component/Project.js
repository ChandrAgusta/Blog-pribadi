import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "To-Do List App",
      description: "Aplikasi manajemen tugas dengan fitur drag-drop dan local storage.",
      image: "/img/projects/todo-preview.jpg", // Ganti dengan path gambar Anda
      link: "https://todo-app-demo.netlify.app",
      github: "https://github.com/ChandrAgusta/todo-app" // Opsional
    },
    {
      title: "E-Commerce Website",
      description: "Website toko online dengan integrasi payment gateway.",
      image: "/img/projects/ecommerce-preview.jpg",
      link: "https://ecommerce-demo.netlify.app",
      github: "https://github.com/ChandrAgusta/ecommerce"
    },
    // Tambahkan proyek lainnya...
  ];

  return (
    <Container id="Projects" className="Projects" style={{ marginTop: "10vh", padding: "5vh 0" }}>
      <h1 style={{ textAlign: "center", marginBottom: "5vh" }}>My Projects</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card className="h-100 project-card">
              <Card.Img 
                variant="top" 
                src={project.image} 
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between">
                <Button 
                  variant="primary" 
                  href={project.link} 
                  target="_blank"
                  className="project-btn"
                >
                  Live Demo
                </Button>
                {project.github && (
                  <Button 
                    variant="outline-secondary" 
                    href={project.github} 
                    target="_blank"
                    className="project-btn"
                  >
                    GitHub
                  </Button>
                )}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;