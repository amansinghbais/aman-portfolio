import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shopee from "../../Assets/Projects/shopee.png";
import covidMapping from "../../Assets/Projects/covid-mapping.png";

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
              imgPath={shopee}
              title="Shopee"
              description="Developed a local classifieds advertising website similar to OLX, where users can advertise their products/services within their locality."
              ghLink="https://github.com/amansinghbais/Shopee"
              demoLink="https://shopee.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidMapping}
              title="Covid Mapping"
              description="Real-time COVID-19 tracker that uses the MapBox API for an interactive world map and the Disease.sh API to display up-to-date COVID-19 case counts. It offers a seamless, user-friendly interface for quick access to global health data."
              ghLink="https://github.com/amansinghbais/covid-mapping"
              demoLink="https://covid-mapping.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
