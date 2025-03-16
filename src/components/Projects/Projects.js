import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobmage from "../../Assets/Projects/jobmage.png";
import codearena from "../../Assets/Projects/codearena.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobmage}
              isBlog={false}
              title="JobMage"
              description="Developed a web platform using the MERN stack to facilitate job and internship exploration in the tech industry. Integrated AI-based Natural Language Understanding (NLU) algorithms for chatbot functionality."
              ghLink="https://github.com/khushnam-chauhan/jobmage.git"
              demoLink="https://jobmage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codearena}
              isBlog={false}
              title="CodeArena"
              description="Built a MERN stack platform for solving coding problems with a dynamic ranking system. Implemented real-time collaborative coding using WebSockets and Monaco Editor with Judge0 API for code execution."
              ghLink="https://github.com/khushnam-chauhan/CodeArena.git"
              demoLink="https://codearena-o64w.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
