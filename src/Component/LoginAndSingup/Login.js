import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, FormLabel } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../Context/useAuth";

import swal from "sweetalert";
import Navigation from "../NavigationBar/Navigation";
import Footer from "../Footer/Footer";

const Login = () => {
  const history = useHistory();
    const location = useLocation();
    const { loginUsingEmailPass, error, loginSuccess, loginWithGoogle } =useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [myLoginData, setLogInData] = useState({});
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [EmailerrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage8, setPasswordErrorMessage8] = useState("");
  const [loading, setLoading] = useState(false);

 function handleClick() {
   setLoading(true);
   loginWithGoogle(history, location);
 }
  

  let passwordFildType;

  if (showPassword) {
    passwordFildType = "text";
  } else {
    passwordFildType = "password";
  }

  const handelBlure = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = { ...myLoginData };
    newData[name] = value;
    setLogInData(newData);
    // optional
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (
      !myLoginData.email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myLoginData.email)
    ) {
      setEmailErrorMessage("Enter a valid Email.");
    } else {
      setEmailErrorMessage("");
    }

    if (!myLoginData.password || myLoginData.password.length < 8) {
      setPasswordErrorMessage8("Password must be 8 charecter");
    } else {
      setPasswordErrorMessage8("");
    }

        loginUsingEmailPass(
          myLoginData.email,
          myLoginData.password,
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
        <div className="InputFildDiv ">
          {" "}
          <FormLabel>
            {" "}
            <FontAwesomeIcon className="inputIcon" icon={faEnvelope} />{" "}
          </FormLabel>
          <input
            onBlur={handelBlure}
            type="email"
            name="email"
            placeholder=" Enter your Email*" />
        </div>
        <div className="errorMessaage ">
          <small>{EmailerrorMessage}</small>
        </div>
        <div className="InputFildDiv ">
          {" "}
          <FormLabel>
            {" "}
            <FontAwesomeIcon className="inputIcon" icon={faKey} />{" "}
          </FormLabel>
          <input
            onBlur={handelBlure}
            name="password"
            type={passwordFildType}
            placeholder="Enter Your Password*" />
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
        <div className="errorMessaage ">
          <small>{errorMessage}</small>
        </div>

        <div className="w-75 mx-auto text-end">
          {" "}
          <small className="ForgatePassword">Forget Password?</small>
        </div>
        <div className="d-flex my-3 justify-content-center">
          <button className="button"> Sign In</button>
        </div>
        <div className="text-center ForgatePassword">
          <small>----Sign up with this link----</small>
        </div>
      </form>
      <div>
        <span className="OtherLoginLinkParent my-3 d-flex">
          <a href="#">
            <span className="OtherLoginLink">
              {" "}
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
          </a>
          <a href="#">
            <span className="OtherLoginLink">
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </a>
          <a onClick={handleClick} href="#">
            <span className="OtherLoginLink">
              {" "}
              <FontAwesomeIcon icon={faGoogle} />
            </span>
          </a>
          <a href="#">
            <span className="OtherLoginLink">
              {" "}
              <FontAwesomeIcon icon={faYahoo} />
            </span>
          </a>
        </span>
      </div>
      <p className="DontHaveAcc mt-4">
        Dont have account?<Link to="/signup">Sign Up</Link>
      </p>
    </div><Footer /></>
  );
};




export default Login;