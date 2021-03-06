import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import SingleDoctor from "./SingleDoctor";
import "./Doctor.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  useEffect(() => {
    axios
      .get("https://aqueous-mountain-45060.herokuapp.com/all-doctor")
      .then((res) => setAllDoctor(res.data));
  }, []);
  if (!allDoctor.length) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <Spinner animation="border" />;
      </div>
    ); 
  
}
  return (
    <div className="section">
      <h2 className="text-center fw-bold mt-5">Our Doctors</h2>
      <hr />
      <div className="text-end">
        <Link to="/all-doctor"> See All</Link>
      </div>
      <Row>
        {allDoctor.slice(0, 4).map((d, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <SingleDoctor doctor={d} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
