import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../Context/useAuth";
import Spinner from "react-bootstrap/Spinner";
import "./Login&SignUp.css";
import Footer from "../Footer/Footer";
import Navigation from "../NavigationBar/Navigation";

const SignUp = () => {
  const history = useHistory();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [signInData, setSignInData] = useState({});
  const [clickSignup, setClickSingup] = useState(false);
  const [firstNameErrorMessage, setfirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [EmailerrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage8, setPasswordErrorMessage8] = useState("");
  const [passwordErrorMessageinvalid, setpasswordErrorMessageinvalid] =
    useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { createAccountUsingEmailPass, error, loginSuccess, setError } =
    useAuth();
  let passwordFildType;
  if (showPassword) {
    passwordFildType = "text";
  } else {
    passwordFildType = "password";
  }

  const handelBlure = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...signInData };
    newData[name] = value;
    setSignInData(newData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!signInData.displayName || signInData.displayName.length < 1) {
      setfirstNameErrorMessage("The first name must be at least 1 characters.");
    } else {
      setfirstNameErrorMessage("");
    }

    if (
      !signInData.email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signInData.email)
    ) {
      setEmailErrorMessage("Enter a valid Email.");
    } else {
      setEmailErrorMessage("");
    }

    if (!signInData.password || signInData.password.length < 8) {
      setPasswordErrorMessage8("Password must be 8 charecter");
    } else {
      setPasswordErrorMessage8("");
    }

    if (signInData.password !== signInData.repassword) {
      setpasswordErrorMessageinvalid("Password Doesn't Match");
    } else {
      setpasswordErrorMessageinvalid("");
    }

    // if any error the   function not move on
    if (!signInData.displayName || signInData.displayName.length < 1) {
      return;
    }

    if (!signInData.email || signInData.email.length < 3) {
      return;
    }
    if (!signInData.email || signInData.email.length < 3) {
      return;
    }

    if (!signInData.password || signInData.password.length < 8) {
      return;
    }

    if (signInData.password !== signInData.repassword) {
      return;
    }
    setClickSingup(true);

    createAccountUsingEmailPass(
      signInData.email,
      signInData.password,
      signInData.displayName,
      history,
      location
    );
  };

  return (
    <><Navigation /><div className="LoginBlock">
      <div className="loginBlockLogo">
        <img
          src="https://i.ibb.co/WDV1Qww/procare-LOgo-removebg-preview-removebg-preview-removebg-preview.png"
          alt="" />
      </div>
      <form onSubmit={handelSubmit}>
        <Row>
          <Col className=" pading0Md" xs={12}>
            {" "}
            <div className="InputFildDiv ">
              <FormLabel>
                <FontAwesomeIcon className="inputIcon" icon={faUser} />
              </FormLabel>
              <input
                onChange={handelBlure}
                name="displayName"
                type="text"
                placeholder=" Enter Your Full Name*" />
            </div>
            <div className="errorMessaage ">
              <small>{firstNameErrorMessage}</small>
            </div>
          </Col>
          <Col className=" pading0Md" xs={12}>
            <div className="InputFildDiv my-3 ">
              <FormLabel>
                {" "}
                <FontAwesomeIcon className="inputIcon" icon={faEnvelope} />{" "}
              </FormLabel>
              <input
                onChange={handelBlure}
                name="email"
                type="email"
                placeholder=" Enter Valid Email*" />
            </div>
            <div className="errorMessaage ">
              <small>{EmailerrorMessage}</small>
            </div>
          </Col>
          <Col className=" pading0Md" xs={12}>
            {/* password */}
            <div className="InputFildDiv ">
              <FormLabel>
                {" "}
                <FontAwesomeIcon className="inputIcon" icon={faKey} />{" "}
              </FormLabel>
              <input
                onChange={handelBlure}
                name="password"
                type={passwordFildType}
                placeholder="Enter Password*" />
              <FormLabel>
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  as={Button}
                  className="ShowPassword"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </span>
              </FormLabel>
            </div>
            <div className="errorMessaage ">
              <small>{passwordErrorMessage8}</small>
            </div>
          </Col>
          {/* re type password */}{" "}
          <Col className=" pading0Md" xs={12}>
            <div className="InputFildDiv ">
              <FormLabel>
                {" "}
                <FontAwesomeIcon className="inputIcon" icon={faKey} />{" "}
              </FormLabel>
              <input
                onChange={handelBlure}
                name="repassword"
                type={passwordFildType}
                placeholder="Re-Type Password*" />
              <FormLabel>
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  as={Button}
                  className="ShowPassword"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </span>
              </FormLabel>
            </div>
            {/* error show */}
            <div className="errorMessaage ">
              <small>{passwordErrorMessageinvalid}</small>
            </div>
          </Col>
          <Col className=" pading0Md" xs={12}>
            <div className="errorMessaage ">
              <small>{errorMessage}</small>
            </div>
            <div className="w-75 mx-lg-auto ms-3  ms-md-5">
              <Form.Group className="mb-1 mt-3" id="formGridCheckbox">
                <Form.Check type="checkbox" required label="I Agree" />
              </Form.Group>
              <p className="DontHaveAcc d-flex justify-content-between mb-0">
                <small>Accept Our Term's and Condition</small>{" "}
                <small>
                  <Link to="/privecy">Red Policy</Link>
                </small>
              </p>
            </div>
          </Col>
        </Row>
        {/* check box  */}

        <div className="d-flex my-2 justify-content-center">
          {clickSignup ? (
            <button disabled type="submit" className="button disabled">
              {" "}
              Sign Up
              <Spinner
                className="ms-2"
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true" />
            </button>
          ) : (
            <button type="submit" className="button ">
              {" "}
              Sign Up{" "}
            </button>
          )}
        </div>
        <p className="DontHaveAcc mb-3">
          Already have account?<Link to="/login">Log In</Link>
        </p>
      </form>
    </div><Footer /></>
  );
};

export default SignUp;
