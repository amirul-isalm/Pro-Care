
import React, { useState } from 'react';
import { Button, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavOffCanvas.css"


const NavOffCanvas = ({ show, setShow }) => {
    

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
              <Nav.Link onClick={handleClose} href="#">
                <span>About</span>
              </Nav.Link>
              <Nav.Link onClick={handleClose} href="#">
                {" "}
                <span>Contact</span>{" "}
              </Nav.Link>
              <Nav.Link onClick={handleClose} href="#">
                <span>Job</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/privecy" onClick={handleClose}>
                <span>Privecy</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/uviom-profile" onClick={handleClose}>
                <span>Profile</span>
              </Nav.Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
};

export default NavOffCanvas;