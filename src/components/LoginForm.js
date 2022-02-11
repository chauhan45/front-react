import React, { useState } from "react";
import axios from "axios";
// import './LoginForm.css';
import { withRouter } from "react-router";
import bg from "../assets/img/photos/photo-1.jpg";
import { Container, Row, Col } from "reactstrap";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
    showError: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post("https://rktechnologies.co.vu/employee/login", payload)
      .then(function (response) {

        console.log("hello")
        // if (response.status === 200) {
        //   setState((prevState) => ({
        //     ...prevState,
        //     successMessage: "Login successful. Redirecting to Admin page..",
        //   }));
        //   // localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
        //   console.log("successful login");

        //   localStorage.setItem("user", 1);
        //   window.location.reload();
        //   // redirectToHome();
        //   props.showError(null);
        // } else if (response.code === 204) {
        //   props.showError("Username and password do not match");
        //   alert("Username and password do not match")
        // } else {
        //   props.showError("Username does not exists");
        //   alert("Username does not exists")
        // }

        console.log("response.status== ", response.status)
        console.log("response.code== ", response.code)
         if (response.status === 401) {
             setState((prevState) => ({
                 ...prevState,
                 showError : "password faild"
             }))
             console.log("password faild")
        //     props.showError("Username and password do not match");
        //     alert("Username and password do not match")
          } 
          else if (response.code === 400) {
            alert("Username and password do not match")
          }

          else if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage: "Login successful. Redirecting to Admin page..",
            }));
            // localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
            console.log("successful login");
  
            localStorage.setItem("user", 1);
            window.location.reload();
            // redirectToHome();
            props.showError(null);
          } 
          else {
            props.showError("Username does not exists");
            alert("Username does not exists")
          }

      })
      .catch(function (error, response) {
        console.log(error);
        // if(response.status === 200){
        //     alert("success") 
        // } else{
        // alert("Username and password do not match")
        // }

      });
  };
  const redirectToHome = () => {
    // props.updateTitle('Home')
    // props.history.push('/home');
  };
  const redirectToRegister = () => {
    props.history.push("/register");
    props.updateTitle("Register");
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="p-0 pt-xs-100">
            <div>
              <img src={bg} alt="..." style={{width: "100%", height: 466}} />
              <div class="shape shape-end shape-fluid-y text-white d-none d-md-block"></div>
            </div>
          </Col>
          <Col md={6}>
            <div
            className="pt-50 pb-50 pl-20 pr-20"
            >
                <h2
                  class="mb-0 fw-bold text-center mb-10"
                  id="modalSigninHorizontalTitle"
                >
                  Sign In
                </h2>

                <p class="mb-6 text-center text-muted mb-30">
                  Simplify your workflow in minutes.
                </p>
              <form>
                <div className="form-group text-left">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control "
                    id="email"
                    aria-describedby="emailHelp"
                    autoComplete="off"
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    {" "}
                    your email here
                  </small>
                </div>
                <div className="form-group text-left">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    autoComplete="off"
                    value={state.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-check"></div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmitClick}
                >
                  {" "}
                  Submit
                </button>
              </form>

              <div
                className="alert alert-success mt-2"
                // style={{ display: state.successMessage || state.showError ? "block" : "none" }}
                style={{ display: state.showError ? "block" : "none" }}
                role="alert"
              >
                {state.successMessage}
                {state.showError}
              </div>
              {/* <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span>
            </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(LoginForm);
