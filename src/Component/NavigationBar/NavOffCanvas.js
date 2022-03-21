
import React, { useState } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import "./NavOffCanvas.css"


const NavOffCanvas = ({ show, setShow }) => {
      const { user, logOut } = useAuth();


      const handleClose = () => setShow(false);
    return (
      <div>
        <Offcanvas
          className="OffCnavas"
          show={show}
          onHide={handleClose}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title to="/" onClick={handleClose} as={Link}>
              {" "}
              <img
                height="50"
                src="https://i.ibb.co/WDV1Qww/procare-LOgo-removebg-preview-removebg-preview-removebg-preview.png"
                alt=""
              />{" "}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="SideNavMenu">
              <Nav.Link onClick={handleClose} as={Link} to="/">
                <span>Home</span>
              </Nav.Link>
              <Nav.Link onClick={handleClose} href="#">
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
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
};

export default NavOffCanvas;