import { React, useEffect } from "react";
import logo1 from "../../../assets/img/logo.png";
import benefits1 from "../../../assets/img/illustrations/time-minuts.jpg";
import cad from "../../../assets/img/illustrations/cad.jpg";
const Partners = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  return (
    <>
      <div className="colorpartner ">
        <h1 className="text-center text-size pt-xs-100">Partners </h1>
        <br /> <br />

        <h2 className="text-center bold11"> Channel Partners </h2><br />

        <div class="container text-center ">
          <div class="row photosize">
            <div class="col-sm">

              <img src={logo1} id="partnerlogo" className="navbar-brand-img" alt="..." />


            </div>
            <div class="col-sm">
              <img src={benefits1} id="partnerlogo" className="navbar-brand-img" alt="..." />

            </div>
            <div class="col-sm">
              <img src={logo1} id="partnerlogo" className="navbar-brand-img" alt="..." />

            </div>
          </div>
        </div> <br /> <br />

        <h2 className="text-center bold11"> Technology Partners </h2> <br />
        <div class="container text-center">
          <div class="row photosize">
            <div class="col-sm">
              <img src={logo1} id="partnerlogo" className="navbar-brand-img" alt="..." />

            </div>
            <div class="col-sm">
              <img src={logo1} id="partnerlogo" className="navbar-brand-img" alt="..." />

            </div>
            <div class="col-sm">
              <img src={cad} id="partnerlogo" className="navbar-brand-img" alt="..." />

            </div>
          </div>
        </div> <br /> <br />
        <h2 className="text-center bold11">Data Partners</h2><br />
        <div class="container text-center">
          <div class="row photosize">
            <div class="col-sm mb-20">
              <img src={logo1} id="partnerlogo" className="navbar-brand-img" alt="..." />

            </div>
            <div class="col-sm">
              <img src={logo1} id="partnerlogo" className="navbar-brand-img" alt="..." />
            </div>
            <div class="col-sm">
              <img src={logo1} id="partnerlogo" className="navbar-brand-img" alt="..." />
            </div>
          </div>
        </div>
      </div> <br />

    </>
  );
};

export default Partners;
