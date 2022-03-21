import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleTest from "./SingleTest";
import './Test.css'

const AllTest = () => {
const [tests,setTests] = useState([]);

useEffect(() => {
  axios
    .get("https://aqueous-mountain-45060.herokuapp.com/all-service")
    .then((res) => setTests(res.data));
}, []);

  if (!tests.length) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <Spinner animation="border" />;
      </div>
    )
  }
  return (
    
    <div className="testSection mx-auto mt-5">
      <h2 className="text-center fw-bold mt-5">Our Best Services</h2>
      <hr />
      <div className="text-end">
        <Link to="/all-serviece"> See All</Link>
      </div>
      <Row>
        {tests.slice(0, 6).map((test, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={4}>
            <SingleTest test={test} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllTest;
