
import { React, useEffect } from "react";
import building from "../../../assets/img/illustrations/pre4.jpeg";
import building1 from "../../../assets/img/illustrations/pre5.jpeg";

import Fade from "react-reveal/Fade";

const Visual_Editing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <section id="Visual_Editing" class="pt-5 pt-md-7 hw pb-80 justify-content-center">
        <h1 className="text-center mb-100 Construction_text pt-xs-110">Visual Editing</h1>
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
                  Visually Edit Your Any Component
                </h2>
                <p className="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text1">
                  View your entire construction plans online and visually edit any component.
                  Easily change construction materials or compare construction change
                  request. Easily group construction materials or identify cost components
                  visually
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section id="welcome" className="pt-4 pt-md-11 pt-40 pb-70 ">
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
                    <h2 class="text-center text-md-start mb-20 pr-20 Construction_text ">
                      Visually Validate Bill Of Materials
                    </h2>
                    <h2 class="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text2">
                      Gives a complete bill of materials based upon assembly codes, structural
                      materials, or categories. All costs of construction are listed in detail
                      and can be easily edit as needed.
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

export default Visual_Editing;
