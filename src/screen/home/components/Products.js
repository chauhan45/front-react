import { React, useEffect } from "react";
import building from "../../../assets/img/illustrations/pre2.jpeg";
import building1 from "../../../assets/img/illustrations/pre3.jpeg";
import building2 from "../../../assets/img/illustrations/pre6.jpeg";
import Fade from "react-reveal/Fade";
import Scheduling from "./Scheduling";
import Visual_Editing from "./Visualediting";
import Cost_alerts from "./Costalerts";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {/* product */}
      <section  class="py-6 py-md-8 ">
        <h1 className="text-center Construction_text pt-30 mb-20 pt-xs-100">Products</h1>
        <div class="container pt-40 pb-100 pb-xs-30 " id="est">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="scheduling_text mb-50 justify-content-center">Takes Seconds To Complete</h1>
              <h3 className="scheduling_text1 mb-70">
              Just fill out the project form and upload your 
              construction plans and then download 
              your construction take-off estimate and schedule. 
              </h3>
              <div class="row justify-content-center">
                <img
                  src={building}
                  className="img-fluid pt-xs-80 justify-content-center building-image "
                  alt="..."
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Estimation */}

      <section id={'Estimation'} class="py-6 py-md-8 ">
        <h1 className="text-center Construction_text pt-30 mb-20 pt-xs-100">Estimation</h1>
        <div class="container pt-40 pb-100 pb-xs-30 " id="est">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="scheduling_text mb-50 justify-content-center">Create a complete construction estimate in less than one minute</h1>
              <h3 className="scheduling_text1 mb-70">
                Own software platform is
                extremely easy to use. Simply
                download your excel
                spreadsheet after you upload
                your construction plans
              </h3>
              <div class="row justify-content-center">
                <img
                  src={building}
                  className="img-fluid pt-xs-80 justify-content-center building-image "
                  alt="..."
                  data-aos-delay="100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="welcome" className=" pt-4 pt-md-11 pt-40 pb-30 mb-60">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div className="col-12 col-md-5 col-lg-6 order-md-2 img11">
                <img
                  src={building2}
                  className="img-fluid p-xs-30 justify-content-center sech_image"
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
                  Construction Costs By Zipcode
                </h2>
                <p className="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text1">
                  Create a complete
                  construction estimate in
                  less than one minute
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
                        src={building1}
                        className="img-fluid  pt-xs-80 p-xs-30 justify-content-center sech_image"
                        alt="..."
                        data-aos-delay="100"
                      />
                    </div>

                  </div>

                  {/* Content right */}
                  <div class="col-12 col-md-6 justify-content-center">
                    <h2 class="text-center text-md-start mb-20 pr-20 Construction_text ">Cost out any kind of project</h2>
                    <h2 class="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text2">
                      Our estimating software works on any type of
                      construction project. Whether it’s a hotel, office building,
                      bridge, airport, or just a residential home. We can also
                      handle any labor type such as union, non-union,
                      government, public works, and higher education
                    </h2>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className=" pt-4 pt-md-11 pt-61 pb-77 mb-100">
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
                <h2 className="text-center text-md-start mb-20 pr-20 Construction_text ">
                  Let Our Platform Do All The
                  Estimating Automatically
                </h2>
                <p className="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text1">
                  Just upload your construction Revit or AutoCAD plan file and let our software
                  completely cost out the entire project in less in a minute.
                </p>

              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <div className="">
        <Scheduling />
      </div>

      {/* Visual_Editing */}

      <div >
        <Visual_Editing />
      </div>

      {/* Cost_alerts */}

      <div>
        <Cost_alerts />
      </div>

    </>
  );
};

export default Products;
