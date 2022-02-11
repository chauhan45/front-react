import {React ,useEffect} from "react";
import Fade from "react-reveal/Fade";
import benefits1 from "../../../assets/img/illustrations/P3D PICTURES.jpg";
import cad from "../../../assets/img/illustrations/P3D4.jpg";
import P3D1 from "../../../assets/img/illustrations/P3D1.jpg";
import project_cost from "../../../assets/img/illustrations/P3D3.jpg";
import Cost_Estimate from "../../../assets/img/illustrations/P3D2.jpg";
import save_time from "../../../assets/img/illustrations/constructionschedule.jpg";
import { Building, BoxArrowUp, CloudHaze, HandIndex } from 'react-bootstrap-icons';
import "./../css/benefitsPage.css";

const Welcome = () => {

  useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

  return (
    <>
      {/* Welcome Section */}
      <h1 className="benefits-h1 text-center pt-xs-100">Benefits</h1>
      <section id="welcome" className=" pt-4 pt-md-11 pt-40 pb-30">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-12 col-md-5 col-lg-6 order-md-2 img11">
                <img
                  src={benefits1}
                  className="img-fluid building pt-xs-80 p-xs-30"
                  alt="..."
                  data-aos-delay="100"
                />

              </div>
            </Fade>
            <Fade bottom>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 " data-aos="fade-up">
                <h4 className="display-4 text-center  mb-20 pr-20 "
                // style={{fontFamily: 'HKGroteskPro-Italic'}}
                > Works with third Party Tools </h4>
                <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8 running-text mb-40 benefitsPageParagraph" >
                  Our construction schedules and take-off estimates work with hundreds of application
                  that can accept spreadsheet data. Our data can also be exported into application that
                  can accept comma deliminted files

                </p>

              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* section 2  */}

      <section className="pt-5 pt-md-7  pb-80 pt-80 ">
        <div className="container  pb-0 pt-26">
          <div className="row align-items-center pl-50 pr-50">
            {/* Content left */}

            <div className="col-12 col-md-6 ">
              <div className="how">
                <img
                  src={cad}
                  className="img-fluid building pt-xs-80 p-xs-30"
                  alt="..."
                  data-aos-delay="100"
                />

              </div>

            </div>

            {/* Content right */}
            <div className="col-12 col-md-6">
              <h3 className="fw-600 mb-30 text-center benefits-h ">No Additional CAD Software Required </h3>
              <p className="fs-lg mb-5 mb-30 running-text text-muted benefitsPageParagraph">
                To use our application, you simply need a construction plan files. No training or additional CAD application is required. Our application can work stand-alone or imported into the thousand of applications that can open a csv.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section id="welcome" className=" pt-4 pt-md-11 pt-40 pb-30">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-12 col-md-5 col-lg-6 order-md-2 img11">
                <img
                  src={P3D1}
                  className="img-fluid building pt-xs-80 p-xs-30"
                  alt="..."
                  data-aos-delay="100"
                />

              </div>
            </Fade>
            <Fade bottom>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 " data-aos="fade-up">
                <h3 className="display-4 text-center  mb-20 pr-20 "
                // style={{fontFamily: 'HKGroteskPro-Italic'}}
                >
                  Process takes minutes vs. weeks and months
                </h3>
                <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8 mb-40 running-text benefitsPageParagraph">
                  Our A.I. algorithm does what a human construction scheduler and estimator takes weeks and months to do.
                  Our algorithms help determine the fastest and most efficient construction schedule



                </p>

              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section className="pt-5 pt-md-7  pb-80 pt-80 ">
        <div className="container pb-0 pt-26">
          <div className="row align-items-center pl-50 pr-50">
            {/* Content left */}

            <div className="col-12 col-md-6 ">
              <div className="how">
                <img
                  src={project_cost}
                  className="img-fluid building pt-xs-80 p-xs-30"
                  alt="..."
                  data-aos-delay="100"
                />
              </div>

            </div>

            {/* Content right */}
            <div className="col-12 col-md-6">
              <h3 className="fw-600 mb-30 benefits-h text-center">Construction Take-off Estimate by Zipcode</h3>
              <p className="fs-lg mb-5 mb-30 running-text text-muted benefitsPageParagraph">
                Our construction take-off estimate is highly localized by zipcode. We determine construction labor, materials, and equipment cost locally.
                <br />
                Our process uses advanced algorithms to determine the cost of any building to build in minutes.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}



      <section id="welcome" className=" pt-4 pt-md-11 pt-40 pb-30">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-12 col-md-5 col-lg-6 order-md-2 img11">
                <img
                  src={Cost_Estimate}
                  className="img-fluid building pt-xs-80 p-xs-30"
                  alt="..."
                  data-aos-delay="100"
                />

              </div>
            </Fade>
            <Fade bottom>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 " data-aos="fade-up">
                <h3 className="display-4 text-center  mb-20 pr-20 "
                // style={{fontFamily: 'HKGroteskPro-Italic'}}
                >
                  Save Time And Money
                </h3>
                <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8 mb-40 running-text benefitsPageParagraph">
                  Our A.I. algorithms does what humans take weeks and months to develop our algorithm takes
                  minutes to create a construction schedule and detailed construction cost take-off estimate.
                </p>

              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* section 6 */}

      <section className="pt-5 pt-md-7  pb-80 pt-80 ">
        <div className="container pb-0 pt-26">
          <div className="row align-items-center pl-50 pr-50">
            {/* Content left */}

            <div className="col-12 col-md-6 ">
              <div className="how">
                <img
                  src={save_time}
                  className="img-fluid building pt-xs-80 p-xs-30"
                  alt="..."
                  data-aos-delay="100"
                />
              </div>

            </div>

            {/* Content right */}
            <div className="col-12 col-md-6">
              <h3 className="fw-600 mb-30 benefits-h text-center">
                Continuously Run An Optimized Construction
                Schedule and Take-Off Estimate
              </h3>
              <p className="fs-lg mb-5 mb-30 running-text  text-muted benefitsPageParagraph">
                You can continuously run your construction project files to maintain accurate
                construction schedule and take-off estimates. <br />
                Compare costs of your on-going projects and their construction schedules <br />
                Compare costs from previous estimates



              </p>

            </div>
          </div>
        </div>
      </section>

      {/* section 7 */}


    </>
  );
};

export default Welcome;
