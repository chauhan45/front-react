import { React, useEffect } from "react";
import building from "../../../assets/img/illustrations/gant15 (1).png";
import building1 from "../../../assets/img/illustrations/gant16 (1).png";
import building2 from "../../../assets/img/illustrations/Scheduling3Image.jpg";
import Fade from "react-reveal/Fade";
const Scheduling = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <section id="Scheduling" class="pt-5 pt-md-7 hw pb-80 pt-10 justify-content-center">
        <h1 className="text-center Construction_text pt-xs-100">Scheduling</h1>
        <div class="container pt-80 pb-100 pb-xs-30">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="scheduling_text mb-30 justify-content-center">Create your construction
                schedule in a minute
              </h1>
              <h3 className="scheduling_text1 mb-70">
                The construction Gantt chart
                provides a simple visualization of
                the project's tasks associated with
                a construction project. Each task
                is represented by a bar that
                defines the start, end, and
                duration of the task.
              </h3>
              <div class="row justify-content-center">
                <img
                  src={building}
                  className="img-fluid pt-xs-80 p-xs-30 justify-content-center "
                  alt="..."
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="welcome" className=" pt-4 pt-md-11 pt-40 pb-30 mb-90">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-12 col-md-5 col-lg-6 order-md-2 img11">
                <img
                  src={building1}
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
                  Automatically Determine Fastest Construction Time
                </h2>
                <p className="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text1">
                  Our application automatically determine the fastest and most cost effective
                  way to build your construction project without the need of any human
                  intervention. The application connects your construction plans visually with
                  your schedule and take-off estimates
                </p>

              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section class="pt-5 pt-md-7 hw pb-80 justify-content-center">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div class="container pb-0 pt-26 justify-content-center">
                <div class="row align-items-center  justify-content-center">
                  {/* Content left */}

                  <div class="col-12 col-md-6 ">
                    <div class="how">
                      <img
                        src={building2}
                        className="img-fluid  pt-xs-80 p-xs-30 justify-content-center sech_image"
                        alt="..."
                        data-aos-delay="100"
                      />
                    </div>
                  </div>
                  {/* Content right */}
                  <div class="col-12 col-md-6 justify-content-center">
                    <h2 class="text-center text-md-start mb-20 pr-20 Construction_text ">
                      Smart Scheduling That Uses A.I. Algorithms
                    </h2>
                    <h2 class="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text2">
                      Our smart algorithms determine the fast and most efficient way to
                      schedule your construction tasks. This automatically runs in
                      the background without any need of user input.
                    </h2>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

    </>
  );
};

export default Scheduling;
