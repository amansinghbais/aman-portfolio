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
          I am a <i><b className="purple">Software Developer @Hotwax Commerce</b></i>, Graduated from <i><b className="purple">IET-DAVV, Indore</b></i>, currently working on OMS product suite web-apps built over VueJs, Vuex/Pinia, Ionic.
          <br />
          <br />
          My expertise spans an extensive toolkit encompassing <i><b className="purple">VueJs, ReactJs, JavaScript, TypeScript</b></i> alongside <i><b className="purple">NodeJs, ExpressJs, MongoDB</b></i> broadening my capability across the entire development spectrum. Additionally, I've extended my proficiency to <i><b className="purple">Java</b></i> and <i><b className="purple">C++</b></i>.
          <br />
          <br />
          My skill set is characterized by robust problem-solving abilities and a keen analytical mindset, allowing me to adeptly identify and resolve intricate issues with efficiency.
        </p>
      </Container>
    </Container>
  );
}
export default Home2;
