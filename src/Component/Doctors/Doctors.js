import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleDoctor from "./SingleDoctor";
import './Doctor.css'

const Doctors = () => {
  const allDocotor = [
    {
      name: "Sara Rahman",
      id: "1",
      expart: "Heart Specalist",
      Dgree: "MBBS,FRPS",
      photo: "https://i.ibb.co/BTgnTVQ/Doctor4.webp",
      review: [
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
      ],
    },
    {
      name: "Risha Khan",
      id: "2",
      expart: "Gynecologists",
      Dgree: "MBBS,FRPS",
      photo: "https://i.ibb.co/Y8qwVqn/Doctor1.png",
      review: [
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
      ],
    },
    {
      name: "Kiron Rahman",
      id: "3",
      expart: "Dental Specalist",
      Dgree: "MBBS,FRPS",
      photo: "https://i.ibb.co/5Fr9dWP/Doctor2.jpg",
      review: [
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
      ],
    },
    {
      name: "Mack Rahman",
      id: "4",
      expart: " Psychologist",
      Dgree: "MBBS,FRPS",
      photo: "https://i.ibb.co/Wg1L0DK/Doctor3.webp",
      review: [
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
        {
          email: "er12992@gmail.com",
          name: "Shanto",
          photo: "",
          rating: "5",
          review: " lorem a dsk a sjkhdsfk a adsfasdfa sd asd akhddsh f ",
          status: "pending",
        },
      ],
    },
  ];


    return <div className="section">
        <h2 className="text-center fw-bold mt-5">Our Doctors</h2>
        <hr />
        <Row>
        {allDocotor.map((d,index) => 
            
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <SingleDoctor doctor={d} />
            
            </Col>


        )}
</Row>


  </div>;
};

export default Doctors;
