import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../NavigationBar/Navigation';
import SingleTest from './SingleTest';

const SeeAllTest = () => {
    const [tests, setTests] = useState([]);

    useEffect(() => {
      axios
        .get("https://aqueous-mountain-45060.herokuapp.com/all-service")
        .then((res) => setTests(res.data));
    }, []);
    return (
        <><Navigation /><div className="testSection mx-auto mt-5">
            <h2 className="text-center fw-bold mt-5">Our All Services</h2>
            <hr />

            <Row>
                {tests.slice(0, 6).map((test, index) => (
                    <Col key={index} xs={12} sm={12} md={6} lg={4}>
                        <SingleTest test={test} />
                    </Col>
                ))}
            </Row>
        </div><Footer /></>
    );
};

export default SeeAllTest;