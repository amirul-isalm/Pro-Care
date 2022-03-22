import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import swal from 'sweetalert';

const AllFeedbackPage = () => {

 const [feedback, setfeedback] = useState([]);
 const [update, setUpdate] = useState(1);

 useEffect(() => {
   const url = `https://aqueous-mountain-45060.herokuapp.com/feedback`;
   fetch(url)
     .then((res) => res.json())
     .then((data) => setfeedback(data));
 }, [update]);

 if (!feedback.length) {
   return (
     <div className="d-flex mt-5 justify-content-center">
       <h1>Don't Have Any feedback</h1>
     </div>
   );
 }

const updateStatus = (updateInfo, status) => {
  updateInfo.status = status;

    fetch("https://aqueous-mountain-45060.herokuapp.com/feedback", {
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
            text: `Alredy Your Feedback Status ${status}`,
            icon: "warning",
            button: "Ok",
          });
        }
      });
  };

const clickDeleteButton = (id) => {
  const confirm = window.confirm(`Are You Sure,  Want To Delete This Feedback?`);
  if (confirm) {
    fetch(`https://aqueous-mountain-45060.herokuapp.com/feedback/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setUpdate(update + 1);
          swal({
            title: "Congratulation!",
            text: "Successfully Delete Feedback!",
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
          {feedback.map((a, key) => (
            <Col key={key} xs={12} sm={6} md={4} lg={4}>
              <div className="singleTestSection my-4">
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <Card.Title>{a.doctorName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <b> </b> {a.email}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      <b>Feedback: </b> {a.feedback}
                    </Card.Subtitle>

                    <Card.Subtitle className="mb-2 text-muted">
                      <b>Status: </b> {a.status}
                    </Card.Subtitle>
                  </Card.Body>
                  <Row>
                    <Col
                      className="d-flex justify-content-center mb-2"
                      xs={6}
                      md={6}
                    >
                      <Button
                        onClick={() => clickDeleteButton(a._id)}
                        variant="outline-danger"
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col
                      xs={6}
                      md={6}
                      className="d-flex justify-content-center mb-2"
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

export default AllFeedbackPage;