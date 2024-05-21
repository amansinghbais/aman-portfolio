import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
        <p className="home-about-body">
          I am a <i><b className="purple">Software Developer @Hotwax Systems</b></i>, Graduated from <i><b className="purple">IET-DAVV, Indore</b></i>, currently developing and maintaining the OMS product suite.
          <br />
          <br />
          My love for web development is fueled by the thrill of turning ideas into dynamic and engaging digital experiences.
          <br />
          <br />
          I also consistently post JS and web dev related content on my <a href="https://www.linkedin.com/in/amansinghbais" target="_blank" style={{ color: 'cyan' }}>LinkedIn</a> .
          </p>
      </Container>
    </Container>
  );
}
export default Home2;
