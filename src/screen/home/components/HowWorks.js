import React from "react";
import g from "../../../assets/img/illustrations/support-40.png";
import building from "../../../assets/img/illustrations/HowItsWorkImage.png";
import ModalBox from "../../../components/Modal/ModalBox";
import RequestDemoReduxForm from "../reduxForm/RequestDemoReduxForm";
import video from "../../../assets/video/video-1.mp4";
import Fade from "react-reveal/Fade";
const HowWorks = () => {

  return (
    <>
      <section class="pt-5 pt-md-7 hw how-works-sec pb-80 pt-80 ">
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div class="container pb-0 pt-26 justify-content-center">
                <div class="row align-items-center pl-50 pr-50">
                  {/* Content left */}
                  <div class="col-12 col-md-6 ">
                    <div class="">
                      <img
                        src={building}
                        className="img-fluid  pt-xs-80 p-xs-30 justify-content-center sech_image"
                        alt="..."
                        data-aos-delay="100"
                      />
                    </div>
                  </div>
                  {/* Content right */}
                  <div class="col-12 col-md-6">
                    <h2 class="fw-400 mb-30 text-white get-up">How it works</h2>
                    <h3 class="fs-lg mb-5 mb-30 running-text ">
                      <span class="text-muted"> Get up and running in minutes to start uploading your
                        construction plans </span>
                    </h3>
                    <h4 className="text-muted text-upload running-text">
                      Upload your plans and select simply select schedule, costs, or
                      both
                    </h4>
                    {/* Button == Request a demo */} <br />
                    <div class="w-md-130" >
                      <div class="device-combo device-combo-iphonex-macbook ">
                        <ModalBox
                          title="Request a demo"
                          btn="Request a demo"
                        // content={<FormEmailJs />}
                        // content={
                        //   <RequestDemoReduxForm
                        //     onSubmitPress={() => alert("test")}
                        //   />
                        // }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL */}
      <section class="py-6 py-md-8 testimo">
        <div class="container pt-80 pb-100 pb-xs-30">
          <div class="row justify-content-center">
            <div class="col-12 col-md-10 col-lg-8 text-center">
              <h2>Testimonial</h2>
              <h3>
                Listen to find out more about how our platform impacts your
                projects
              </h3>
              <div class="row justify-content-center">
                <video width="400" controls>
                  <source
                    src={video}
                    class="row justify-content-center"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section class="pt-8 pt-md-11 bg-gradient-light-white">
        <div class="container">
          <div class="row justify-content-center"></div>
        </div>
      </section> */}
      {/* Support Let us help you*/}
      <section class="pt-12 pt-md-13 support pt-80 pb-80  free-live ">
        {/* line-image */}
        <div className="container">
          <div className="row align-items-center">
            <Fade bottom>
              <div class="container justify-content-center">
                <div class="row align-items-center ">
                  <div class="col-12 col-md-5 col-lg-6 order-md-2 image-support">
                    <img src={g} alt="..." class="img-fluid mb-6 mb-md-0 image-support" />
                  </div>
                  <div class="col-12 col-md-7 col-lg-6 order-md-1 pl-60 pr-30 pl-xs-30">
                    <div class="free">
                      <h2 className="">
                        <span class="text-white get-up">Free Live Support</span>
                        <span class="text-primary"></span>
                      </h2>
                      <p class="fs-lg text-gray-700 mb-6 running-text">
                        Let us help you
                      </p>
                      <p class="fs-lg text-gray-700 mb-6  running-text">
                        We will support you with all your construction scheduling and
                        take-off estimates
                      </p>
                    </div>
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
export default HowWorks;
