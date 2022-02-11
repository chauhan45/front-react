import {React,useEffect} from "react";
import building from "../../../assets/video/P3D-Banner.mp4";
import Fade from "react-reveal/Fade";
import { Building, BoxArrowUp, CloudHaze, HandIndex } from 'react-bootstrap-icons';
import { useHistory } from "react-router";

const Welcome = () => {
  let history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {/* Welcome Section */}
      <section id="welcome" className=" pt-4 pt-md-11 pt-40 pb-30">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-12 col-md-5 col-lg-6 order-md-2 img11">
                {/* <video
                src={building}
                className="img-fluid building pt-xs-80 p-xs-30"
                alt="..."
                data-aos-delay="100"
                loop
                autoplay
              /> */}
                <video autoPlay muted loop className="img-fluid building pt-xs-80 p-xs-30">
                  <source src={building} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-12 col-md-7 col-lg-6 order-md-1 " data-aos="fade-up">
                <h2 className="display-4 text-center text-md-start mb-20 pr-20"
                // style={{fontFamily: 'HKGroteskPro-Italic'}}
                >
                  Construction Scheduling & Estimating Software.
                </h2>
                <p className="lead text-center text-md-start text-muted mb-6 mb-lg-8 mb-40">
                  Upload your Construction plans or BIM files and get your
                  complete construction schedule and take-off estimate in minutes.
                </p>
                <div className="text-center">
                  <a onClick={() => {
                    history.push("/Aboutus");
                  }}
                    className="btn btn-primary lift"
                  >
                    Learn More
                  </a>
                  {/* <Link to="/AboutUs" class="jeRnwg">Learn More</Link> */}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* Get your construction ... */}
      <section className="py-6 py-md-8  pt-50 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="getTitle ">Get your construction schedule and estimates in minutes!</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 py-md-8 bg-dark titleEasy-section ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="titleEasy ">
              3 Easy Steps
            </h2>
          </div>
        </div>
      </section>
      {/* 3 Easy Steps .. */}
      <section className="py-8 py-md-11 pt-50 pb-50 easySteps pt-xs-40 pb-xs-40 pl-xs-20 pr-xs-20 steps-section">
        <div className="container">
          <div className="row">
            <Fade bottom>
              <div className="col-12 col-md-4 mb-xs-50 " data-aos="fade-up">
                <div className="icon mb-0">

                  <BoxArrowUp />&nbsp; &nbsp;
                  <h3 className="mt-5 step-title">Step 1</h3>
                </div>

                <p className="text-muted mb-6 mb-md-0" >
                  Upload Construction Plans Upload your AutoCAD, BIM, or PDFs to
                  enable our AI and machine learning engine to optimize your costs and schedules
                </p>
              </div>
            </Fade><Fade bottom>
              <div className="col-12 col-md-4 mb-xs-50" data-aos="fade-up" data-aos-delay="50">
                <div className="icon mb-0">
                  <HandIndex />&nbsp; &nbsp;
                  <h3 className="mt-5 step-title">Step 2</h3>
                </div>
                <p className="text-muted mb-6 mb-md-0">
                  Click “Get Schedule” Our AI and machine learning engine will
                  optimize your schedule for fastest and most in-expensive way to
                  build
                </p>
              </div>
            </Fade><Fade bottom>
              <div
                className="col-12 col-md-4 mb-xs-50"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon  mb-0">

                  <Building />&nbsp; &nbsp;
                  <h3 className="mt-5 step-title">Step 3</h3>
                </div>

                <p className="text-muted mb-6 mb-md-0" >
                  Click “Get Take-Off Estimate” Our AI and machine learning engine
                  will price out your entire construction costs in minutes
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

    </>
  );
};

export default Welcome;
