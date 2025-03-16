import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prof1.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm <strong className="purple">Khushnam Chauhan</strong>, a passionate
              <strong> MERN Stack Developer</strong> with a deep love for building
              scalable and efficient web applications.
              <br />
              <br />I specialize in <strong className="purple">JavaScript</strong>, working with
              technologies like <strong className="purple">React.js, Next.js, and Node.js</strong> to
              craft seamless user experiences and powerful backend solutions.
              <br />
              <br />My interests lie in <strong className="purple">software development</strong> and
              continuously exploring new web technologies to stay ahead in the field.
              <br />
              <br />I love collaborating on projects, solving complex problems, and developing
              innovative digital solutions that make an impact.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/khushnam-chauhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khushnam-chauhan-58b25a2a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
