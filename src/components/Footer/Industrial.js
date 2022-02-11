import {React , useEffect} from 'react'
import building2 from "../../assets/img/illustrations/IndustrialImage.jpg";
import Fade from "react-reveal/Fade";

export const Industrial = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
    return (
        <>
         <section id="Industrial" className=" pt-4 pt-md-11 pt-40 pb-30 mb-50">
        <h1 className="text-center Construction_text mb-30 pt-xs-100 mb-110 IndustrialText">Industrial</h1>
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
                 Industrial Solutions 
                </h2>
                <p className="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text1">
                Our solution works with any industrial project regardless of industrial use.
                 Whether a powerplant, refinery, steel manufacturer, or any type of 
                 manufacturing facility. Prediction3D’s data sources can supports any 
                 type of industrial construction materials, techniques, and systems. 
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
    )
}
