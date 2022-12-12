import React from "react";
import "../SignUp/SignUp.scss";
// import { Link } from "react-router-dom";
//
const LogIn = () => {
  return (
    <div className="App1">
      <h1 className="h11"> LOGIN </h1> <hr />
      <div className="form">
        <label className="labell"> Email: </label>{" "}
        <input
          type="text1"
          name="mail"
          className="inputt"
          placeholder="Enter your email"
          //   onChange={(e) => {
          //     setmail(e.target.value); //will work whene5ver we 6make changes
          //   }}
        />{" "}
        <label className="labell"> Password: </label>{" "}
        <input
          type="text1"
          name="Pass"
          className="inputt"
          placeholder="Enter Password"
          //   onChange={(e) => {
          //     setpass(e.target.value); //will work whene5ver we 6make changes
          //   }}
        />
        <h4 className="h44">
          <a href="/"> Forget Password? </a>{" "}
        </h4>{" "}
        <button className="button2"> Login </button>{" "}
      </div>{" "}
      <h4 className="h44">
        {" "}
        Not have an account ?
        <a href="/" className="aa">
          Sign up here
        </a>{" "}
        {/* <Link to="/SignUp">Not have an account ? Sign up here</Link> */}
      </h4>{" "}
    </div>
  );
};

export default LogIn;
