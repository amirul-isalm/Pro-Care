import React, { useEffect, useState } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import useAuth from "../Context/useAuth";

const MyAppoinment = () => {
  const [appoinment, setappoinment] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    const url = `https://aqueous-mountain-45060.herokuapp.com/booking-appoinment?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setappoinment(data));
  }, [user]);

  if (!appoinment.length) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <h1>You Dont Have Any Appoinment</h1>
      </div>
    );
  }
  let price = 0;
  for (let i = 0; i < appoinment.length; i++) {
    const element = appoinment[i];

      price = price + parseInt(element.visit);
     
    }
    

  return (
    <div>
      <Row>
        {appoinment.map((a, key) => (
          <Col key={key} xs={12} sm={6} md={4} lg={4}>
            <div className="singleTestSection my-4">
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Doctor:{a.DoctorName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <b> Pataint:</b> {a.pataintName}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <b>Problem: </b> {a.Problem}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <b>Date:</b> {a.date}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <b>Status: </b> {a.status}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <b>Visit:</b> {a.visit}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}

        <hr />
      </Row>
      <div>
        <h1>Total Bill:{price} </h1>
        <h6 className="text-danger">20% Discount Applicable When Total Bill Minimum 25000 BDT</h6>
        <h2 className="text-success">Bill After Discount:{(price>=25000)?(price*0.8):price  } </h2>
      </div>
    </div>
  );
};

export default MyAppoinment;
