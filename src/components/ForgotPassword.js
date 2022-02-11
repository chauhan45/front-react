import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from 'react-router-dom'
import LoginPage from "./LoginPage";
import { ModalBoxPri } from "./Modal/ModalBox";
import axios from 'axios'
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const [show, setShow] = useState(false);
  // const errors = {};
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [enableloginpage, setEnableloginpage] = useState(false);
  const loginpageLinkHandler = () => {
    if (!enableloginpage) {
      setEnableloginpage(true);
    } else {
      setEnableloginpage(false);
    }
  }
  // valodation



  // validation
  // code 

  const PostData = (e) => {
    fetch('/Forgot/Forgotpassword', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email

      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)

      }).catch(err => {
        console.log(err)
      })
    console.log(email)
    setShow(true);

  }

  return (
    <>
      <section className="section-border border-primary pt-xs-100">
        <div className="container d-flex flex-column min-vh-100 ">
          <div className="row align-items-center justify-content-center gx-0 min-vh-100">
            <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11 size11">
              <h3 className="mb-0 fw-bold text-center">
                Forgot  Your Password?
              </h3>
              <p className="mb-6 text-center text-muted">
                Web app service also supports users resetting their password. Email with link to change their password is sent using AWS SES.
              </p>

              <div className="form-group">

                <input type="email" className="form-control form-rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email" placeholder="Enter Email Address..." />
              </div>

              <button className="btn w-100  form-rounded text-light resetcolor " type="submit"
                onClick={() => PostData()}>
                Reset Password
              </button>
              <hr></hr>
              <hr></hr>

              <p className="mb-0 fs-sm text-center text-muted ">
                Already have an account?
                <div className="btnlogin">
                  <ModalBoxPri
                    btn="Login"
                    className="resetcolor w-100"
                    content={enableloginpage ? <LoginPage /> : <LoginPage onloginpage={loginpageLinkHandler} />}
                    modalClassNclassName="resetcolor"
                  />
                </div> <br></br>
              </p>
              {show ? <div class="alert alert-info text-center m-auto mb-50 shadow p-3" role="alert">
                <h3>go to  gmail id .</h3>
              </div>
                : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default ForgotPassword;