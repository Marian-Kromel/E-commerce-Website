import React from "react";
import "./SignUp.scss";
// import { Link } from "react-router-dom";
// import "./LogIn/LogIn";
import { useState, useEffect } from "react";
import Axios from "axios";

const SignUp = () => {
  const [fn, setfn] = useState(""); //hook
  const [ln, setln] = useState("");
  const [mail, setmail] = useState(""); //hook
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  const [AllList, setAllList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setAllList(response.data);
    });
  });

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      fn: fn,
      ln: ln,
      mail: mail,
      pass: pass,
      cpass: cpass,
    });
    console.log("successful insert");
  };

  return (
    <div className="App1">
      <h1 className="h11"> SIGN UP </h1> <hr />{" "}
      <h4 className="h44"> Create New Account </h4>{" "}
      <div>
        <label className="labell"> First Name: </label>{" "}
        <input
          type="text1"
          name="first Name"
          // className="inputt"
          placeholder="Enter your First Name"
          onChange={(e) => {
            setfn(e.target.value); //will work whene5ver we 6make changes
          }}
        />{" "}
        <label className="labell"> Last Name: </label>{" "}
        <input
          type="text1"
          name="last Name"
          // className="inputt"
          placeholder="Enter your Last Name"
          onChange={(e) => {
            setln(e.target.value); //will work whene5ver we 6make changes
          }}
        />{" "}
        <label className="labell"> Email: </label>{" "}
        <input
          type="text1"
          name="mail"
          // className="inputt"
          placeholder="Enter your email"
          onChange={(e) => {
            setmail(e.target.value); //will work whene5ver we 6make changes
          }}
        />{" "}
        <label className="labell"> Password: </label>{" "}
        <input
          type="text1"
          name="Pass"
          // className="inputt"
          placeholder="Create Strong Password"
          onChange={(e) => {
            setpass(e.target.value); //will work whene5ver we 6make changes
          }}
        />{" "}
        <label className="labell"> Confirm Password: </label>{" "}
        <input
          type="text1"
          name="Pass"
          // className="inputt"
          placeholder="Confirm Password"
          onChange={(e) => {
            setcpass(e.target.value); //will work whene5ver we 6make changes
          }}
        />{" "}
        <button className="button1" onClick={submitReview}>
          {" "}
          Register Now{" "}
        </button>{" "}
      </div>{" "}
      <h4 className="h44">
        Already have an Account ?{" "}
        <a href="/LogIn" className="aa">
          {" "}
          Login{" "}
        </a>{" "}
      </h4>{" "}
    </div>
  );
};

export default SignUp;
