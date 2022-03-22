import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import swal from "sweetalert";

const AllAppoinment = () => {
  const [appoinment, setappoinment] = useState([]);
  const [update, setUpdate] = useState(1);

  useEffect(() => {
    const url = `https://aqueous-mountain-45060.herokuapp.com/all-appoinment`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setappoinment(data));
  }, [update]);

  if (!appoinment.length) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <h1>Don't Have Any Appoinment</h1>
      </div>
    );
  }

  const updateStatus = (updateInfo, status) => {
    updateInfo.status = status;

    fetch("https://aqueous-mountain-45060.herokuapp.com/appoinment", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal({
            title: "Congratulation!",
            text: "Status Change Successfully!",
            icon: "success",
            button: "Ok",
          });
          setUpdate(update + 1);
        } else {
          swal({
            title: "Opps!",
            text: `Alredy Your Appoinment Status ${status}`,
            icon: "warning",
            button: "Ok",
          });
        }
      });
  };
  const clickDeleteButton = (id) => {
    
    const confirm = window.confirm(
      `Are You Sure,  Want To Delete This Appoinment?`
    );
    if (confirm) {
      fetch(`https://aqueous-mountain-45060.herokuapp.com/appoinment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setUpdate(update + 1);
            swal({
              title: "Congratulation!",
              text: "Successfully Delete Appoinment!",
              icon: "success",
              button: "Ok",
            });
          }
        });
    }
  };

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
                    <b> Email:</b> {a.PataintEmail}
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
                <Row>
                  <Col
                    className="d-flex justify-content-center mb-2"
                    xs={4}
                    md={4}
                  >
                    <Button
                      onClick={() => clickDeleteButton(a._id)}
                      variant="outline-danger"
                    >
                      Delete
                    </Button>
                  </Col>
                  <Col
                    className="d-flex justify-content-center mb-2"
                    xs={4}
                    md={4}
                  >
                    <Button
                      onClick={() => updateStatus(a, "Cancle")}
                      variant="outline-danger"
                    >
                      Cancle
                    </Button>
                  </Col>
                  <Col
                    className="d-flex justify-content-center mb-2"
                    xs={4}
                    md={4}
                  >
                    <Button
                      onClick={() => updateStatus(a, "Done")}
                      variant="outline-success"
                    >
                      Done
                    </Button>{" "}
                  </Col>
                </Row>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllAppoinment;
