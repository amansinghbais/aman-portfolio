import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Connect with me</h1>

          <ul className="home-about-social-links">
            <li className="social-icons">
              <a href="https://github.com/amansinghbais" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/amansinghbais/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/sing_h_aman/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
