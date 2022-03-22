import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Carusel.css";

const Carusel = () => {

  const banner = ["https://i.ibb.co/zR3Z8XD/Amicus-Gene-Therapy-Research-Center-Lobby-1920x640.jpg",
    "https://i.ibb.co/XpygGK3/hospital-banner.jpg",
    "https://i.ibb.co/YPsk82y/group-medical-doctors-smiling-stethoscopes-over-white-background-43862280.jpg",
    "https://i.ibb.co/3FxcWPJ/mercy-dunes-medical-lab-micro-lab-1920x640.jpg",
    "https://i.ibb.co/mXRCxc7/mercy-dunes-histology-lab-ventana-analyzersm.jpg]"];
    

  return (
    <div className="Carusel">
      <Carousel>
        {banner.map((picture, index) => (
          <Carousel.Item key={index} interval={2000}>
            <img
              className="d-block rounded-3 w-100"
              src={picture}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="CaruselText">
        {" "}
        <div className="text-center">
          <h1 className="mx-auto ">The Best Hospital</h1>
          <h1 className="mx-auto ">and Doctors </h1>
          <Link to="/all-doctor">
            <Button variant="outline-success" size="lg">
              {" "}
              Find Doctor{" "}
            </Button>{" "}
          </Link>
          <Link to="/all-serviece">
            {" "}
            <Button variant="primary" size="lg">
              Medical Tests
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
