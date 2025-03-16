import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function AboutCard() {
  return (
    <div className="about-card">
      <h2>Hello, I'm Khushnam Chauhan</h2>
      <p>
        A passionate <strong className="purple">MERN Stack Developer</strong> who loves crafting seamless and interactive user experiences.
      </p>
      <p>
        With a strong foundation in frontend development using ReactJS, I specialize in building dynamic and scalable web applications. I completed my BCA from the Asian School of Business in 2022 and am currently pursuing my MCA, constantly sharpening my skills and exploring new technologies.
      </p>
      <p>
        Beyond coding, I thrive on solving complex problems and bringing ideas to life. As the former Secretary of the WebGeeks Club, I developed leadership and collaboration skills that help me navigate the ever-evolving tech landscape. I'm always eager to innovate and push boundaries.
      </p>
    </div>
  );
}

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;