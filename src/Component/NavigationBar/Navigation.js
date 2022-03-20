

import React, { useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";
import NavOffCanvas from "./NavOffCanvas";

const Navigation = () => {
  const [show, setShow] = useState(false);
 

  const handelShow = () => setShow(true);
 

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand
          className="d-flex justify-content-lg-between"
          as={Link}
          to="/"
        >
          <img
            src="https://i.ibb.co/WDV1Qww/procare-LOgo-removebg-preview-removebg-preview-removebg-preview.png"
        
            height="50"
            className="d-inline-block align-top"
            alt="LOGO"
          />
        </Navbar.Brand>

        <span onClick={handelShow} className="cousotomNavIcon">
          <img src="https://i.ibb.co/Vm3Vfz9/3-dot.png" alt="" />
        </span>
        {/* side nav bar  */}

        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navLink ExpandNav">
            <Nav.Link href="#">
              <span>About</span>
            </Nav.Link>
            <Nav.Link href="#">
              {" "}
              <span>Contact</span>{" "}
            </Nav.Link>
            <Nav.Link href="#">
              <span>Job</span>
            </Nav.Link>
           
            <Nav.Link as={Link} to="/">
              <span>Privecy</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <span>Profile</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <NavOffCanvas show={show} setShow={setShow} />
    </Navbar>
  );
};

export default Navigation;
