import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleDoctor = ({ doctor }) => {
    console.log(doctor);
    const { name, expart, Dgree,photo } = doctor;
    return (
      <div>
        <Card className='text-center' style={{ width: "100%" }}>
          <Card.Img width="100%" height="240px" variant="top" src={photo} />
          <Card.Body>
                    <Card.Title>{name}</Card.Title>
            <Card.Text>
                        {expart}
                        <br />
                        {Dgree}
            </Card.Text>
            <Button variant="outline-primary">Details</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default SingleDoctor;