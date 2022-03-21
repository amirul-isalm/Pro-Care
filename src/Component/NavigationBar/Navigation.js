import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Context/useAuth";
import "./Navigation.css";
import NavOffCanvas from "./NavOffCanvas";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const { user, logOut } = useAuth();
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
            <Nav.Link  as={Link} to="/">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#">
              {" "}
              <span>Contact</span>{" "}
            </Nav.Link>

            {user.email && (
              <>
                <Nav.Link as={Link} to="/dashbord">
                  <span>Dashbord</span>
                </Nav.Link>

                <h5 className="mt-2 fw-normal text-light">
                  {user?.displayName}
                </h5>

                <img
                  className="mx-3"
                  style={{ width: "40px", borderRadius: "50%" }}
                  src={user?.photoURL}
                  alt=""
                />

                <Button onClick={logOut} variant="outline-warning">
                  Logout
                </Button>
              </>
            )}
            {!user.email && (
              <Nav.Link as={Link} to="/login">
                <span>Login</span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      <NavOffCanvas show={show} setShow={setShow} />
    </Navbar>
  );
};

export default Navigation;
