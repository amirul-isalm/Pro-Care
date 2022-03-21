import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../Context/useAuth";
import Footer from "../Footer/Footer";
import Navigation from "../NavigationBar/Navigation";
import "./Doctor.css";

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctor, setdoctor] = useState({});
  const [appoinmentData, setAppoinmentData] = useState({});
  const { user } = useAuth();
  const [appoinmentInformation, setappoinmentInformation] = useState({});
  const [feedback, setFeedBack] = useState({});
  useEffect(() => {
    fetch(`https://aqueous-mountain-45060.herokuapp.com/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setdoctor(data));
  }, [id]);
    const { name, expart, Dgree, photo, visit, _id } = doctor;
    

  const handelBlure = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const newInformaiton = {
      ...appoinmentInformation,
      DoctorName: name,
      PataintEmail: user.email,
      status: "Weating",
      visit: visit,
    };
    newInformaiton[inputName] = inputValue;
    setappoinmentInformation(newInformaiton);
  };

  const handelfeedBack = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const feedbackInfo = {
      ...feedback,
      doctorName: name,
        doctorId: _id,
      status:"pending",
      name: user?.displayName,
      email: user?.email,
    };
    feedbackInfo[inputName] = inputValue;
    setFeedBack(feedbackInfo);
    };
    
    // submit feedback
  const handelfeedBackSubmit = (e) => {
    e.preventDefault();

    

    fetch("https://aqueous-mountain-45060.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
        .then((data) => {
         
        if (data.insertedId) {
          swal({
            title: "Congratulation!",
            text: "Feedback Give Successfully!",
            icon: "success",
            button: "Ok",
          });
          e.target.reset();
        }
      });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

   
    fetch("https://aqueous-mountain-45060.herokuapp.com/appoinment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appoinmentInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Congratulation!",
            text: "Appoinment Book Successfully!",
            icon: "success",
            button: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <>
      <Navigation />
      <div className="section my-5">
        <div>
          <Row>
            <Col xs={12} md={6}>
              {" "}
              <img className="img-fluid" src={photo} alt="" />{" "}
            </Col>
            <Col xs={12} md={6}>
              <div className="my-4">
                <h1>{name}</h1>
                <h6>{expart}</h6>
                <p>{Dgree}</p>
                <h4> Visit: {visit} BDT</h4>
              </div>

              <div className="my-4">
                <h2 className="text-center fw-bold mt-5">Book Appoinment</h2>
                <hr />

                <form onSubmit={handelSubmit}>
                  <Row>
                    <Col xs={12} md={6} lg={6}>
                      <div className="appoinmentInput ">
                        <input
                          required
                          onChange={handelBlure}
                          type="text"
                          name="pataintName"
                          placeholder=" Enter Pataint Name*"
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                      <div className="appoinmentInput ">
                        <input
                          onChange={handelBlure}
                          type="email"
                          name="PataintEmail"
                          value={user?.email || ""}
                          placeholder=" Enter your Email*"
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                      <div className="appoinmentInput ">
                        <input
                          required
                          onChange={handelBlure}
                          type="number"
                          name="phone"
                          placeholder=" Enter your Phone Number*"
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                      <div className="appoinmentInput ">
                        <input
                          required
                          onChange={handelBlure}
                          type="date"
                          name="date"
                          min={new Date().toISOString().slice(0, 10)}
                          max="2022-12-31"
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                      <div className="appoinmentInput ">
                        <input
                          onChange={handelBlure}
                          type="number"
                          name="visit"
                          value={visit || ""}
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                      <div className="appoinmentInput ">
                        <textarea
                          onChange={handelBlure}
                          type="number"
                          name="Problem"
                          placeholder="Discribe Pataint Problem"
                        />
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="d-flex my-2 justify-content-center">
                        <Button type="submit" variant="outline-primary">
                          {" "}
                          Book Appoinment
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>

        {/* 




*/}

        <div>
          <h2 className="text-center fw-bold mt-5">Give Your Feedback</h2>
          <hr />

          <form onSubmit={handelfeedBackSubmit}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <div className="appoinmentInput ">
                  <input
                    required
                    onChange={handelfeedBack}
                    type="text"
                    name="Name"
                    value={user?.displayName || ""}
                  />
                </div>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className="appoinmentInput ">
                  <input
                    required
                    onChange={handelfeedBack}
                    type="email"
                    name="feedbackEmail"
                    value={user?.email || ""}
                  />
                </div>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div className="appoinmentInput ">
                  <textarea
                    required
                    onChange={handelfeedBack}
                    type="email"
                    name="feedback"
                    placeholder="Enter Your Feedback"
                  />
                </div>
              </Col>

              <Col xs={12}>
                <div className="d-flex my-2 justify-content-center">
                  <Button type="submit" variant="outline-primary">
                    {" "}
                    Feedback{" "}
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorDetails;
