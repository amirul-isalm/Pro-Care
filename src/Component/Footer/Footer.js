import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer mt-4">
      <div className="emergency" xs={12}>
        <h4>For Emergencies Please Call Us At (850-753-106)</h4>
      </div>
      <Row className="FooterRow">
        <Col className="FooterImage" xs={12} sm={12} md={6} lg={3}>
          <div>
            <img
              width="40%"
              className="ms-0"
              src="https://i.ibb.co/WDV1Qww/procare-LOgo-removebg-preview-removebg-preview-removebg-preview.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <h3>About us</h3>
            <p>
              {" "}
              We provide fast-class services <br /> last 14 years.
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              {" "}
              <span>
                <FontAwesomeIcon icon={faMobile} />{" "}
              </span>{" "}
              96 7541 504 541
            </p>
            <p>
              {" "}
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>{" "}
              procare@gmail.com
            </p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <h3>Information</h3> <Link to="/">About Us</Link>{" "}
          <Link to="/">Blogs</Link> <Link to="/">More</Link>{" "}
          <Link to="/">Search</Link> <Link to="/">Events</Link>
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <h3>Helpful links</h3> <Link to="/">Services</Link>{" "}
          <Link to="/"> Support </Link> <Link to="/"> Trams & Condition</Link>{" "}
          <Link to="/"> Privacy Policy</Link>
        </Col>

        <Col xs={12} sm={12} md={6} lg={3}>
          <h3>Subscribe More Info</h3>
          <div className=" Subscription">
            
            <input
              
              type="text"
              placeholder=" Enter Your Email*"
            />
          </div>
          <Button className="bg-warning mb-3 fw-bold fs-5 subsctibeBTn py-1 px-3 rounded-3 mt-3">
            Subscribe
          </Button>
          <div className="socialLink">
            <a
              href="https://www.facebook.com/shanto.1953/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-amirul-islam-shanto-9a99a321a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/amirul-isalm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:amirulislam.shanto.75@gmail.com
"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </Col>
        <hr className="mt-2" style={{ color: "white", height: "2px" }} />
        <div className="col-12 text-white text-center">
          <small>Copyright © 2021 Procare.com</small>
        </div>
      </Row>
    </div>
  );
};

export default Footer;
