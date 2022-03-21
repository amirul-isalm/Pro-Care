import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SingleDoctor from "./SingleDoctor";
import "./Doctor.css";
import axios from "axios";
import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";

const SeeAllDoctor = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  useEffect(() => {
    axios
      .get("https://aqueous-mountain-45060.herokuapp.com/all-doctor")
      .then((res) => setAllDoctor(res.data));
  }, []);

  return (
    <><Navigation /><div className="section">
      <h2 className="text-center fw-bold mt-5">Our Doctors</h2>
      <hr />

      <Row>
        {allDoctor.slice(0, 4).map((d, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <SingleDoctor doctor={d} />
          </Col>
        ))}
      </Row>
    </div><Footer /></>
  );
};

export default SeeAllDoctor;
