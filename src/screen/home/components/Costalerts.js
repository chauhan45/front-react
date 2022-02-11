import { React, useEffect } from "react";
import building from "../../../assets/img/illustrations/costImage11.png";
import Fade from "react-reveal/Fade";

const Cost_alerts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <section id="Cost_alerts" class="pt-5 pt-md-7 hw pb-80 justify-content-center">
        <h1 className="text-center mb-40 Construction_text pt-xs-110">Cost Alerts</h1>
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-12 col-md-5 col-lg-6 order-md-2 img11">
                <img
                  src={building}
                  className="img-fluid pt-xs-80 p-xs-30 justify-content-center sech_image"
                  alt="..."
                  data-aos-delay="100"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 " data-aos="fade-up">
                <h2 className="text-center text-md-start mb-20 pr-20 Construction_text "
                // style={{fontFamily: 'HKGroteskPro-Italic'}}
                >
                  Cost Alerts
                </h2>
                <p className="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text1">
                  Prediction3D enables cost alerts when prices change by zipcode.
                  Cost alerts can reflect construction cost changes in labor,
                  material, and equipment by zipcode
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

    </>
  );
};

export default Cost_alerts;
