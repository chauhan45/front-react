import React, { useState } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom";

const ConfirmEmail = () => {
  const [show, setShow] = useState(false);
  // var search = useLocation().search;
  // const email = new URLSearchParams(search).get('user');
  // const urlParams = new URLSearchParams(window.location.search);
  // const email = urlParams.get('email');
  // console.log(email);

  const onSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('user');
    const code = urlParams.get('id');
    console.log("Email: " + email + ", Code: " + code);
    axios.post("/confirm/is_confirm_email", {email: email, code: code}).then(
      (success) => {
        console.log(success.data);
      }
    ).catch(
      (error) => {
        console.log("error");
      }
    );
    setShow(true);
    
  }
  return (
    <>
      <h1 className="text-center text-size mb-30 pt-xs-100"> Confirm Email</h1>
      {show ? <div class="alert alert-info w-50 text-center m-auto mb-50 shadow p-3" role="alert">
        <h3>You email has been confirmed successfully.</h3>
      </div>
        : null}
      <form class="mb-6" onSubmit={onSubmit}>
        <button type="submit" className="btn btn-primary mb-100 button-confirm ">Confirm Email</button>

      </form>
     
    </>
  )
}



export default ConfirmEmail;


// import React from 'react'

//  const confirm_email = () => {
//   return (
//     <div>

//     </div>
//   )
// }
// export default confirm_email;