import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SingleDoctor = ({ doctor }) => {
  const history = useHistory();
  const clickPurcessButton = (id) => {
    history.push(`/doctor/${id}`);
  };
  const { name, expart, Dgree, photo, _id } = doctor;

  return (
    <div className="my-3">
      <Card className="text-center" style={{ width: "100%" }}>
        <Card.Img width="100%" height="240px" variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {expart}
            <br />
            {Dgree}
          </Card.Text>
          <Button
            onClick={() => clickPurcessButton(_id)}
            variant="outline-primary"
          >
            Book Appoinment
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleDoctor;
