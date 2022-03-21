import React from 'react';
import { Card } from 'react-bootstrap';
import './Test.css'

const SingleTest = ({test}) => {
  const { name, photo, description } = test;
  return (
    <div className="singleTestSection my-4">
      <Card style={{ width: "100%" }}>
        <img className='m-4' width="70" src={photo} alt="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description.slice(0, 64)}....
          </Card.Subtitle>

          <Card.Link  href="#">Learn More</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleTest;