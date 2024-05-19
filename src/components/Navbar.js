import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import pdf from "../Assets/../Assets/AmanSinghBaisResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar expanded={true} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex">
          <h2 className="main-name">Asb.</h2>
        </Navbar.Brand>

        <Nav className="ms-auto" defaultActiveKey="#home">
          <Button variant="primary" href={pdf} target="_blank" style={{ marginTop: "10px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
