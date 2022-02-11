import {React , useEffect} from 'react'
import building2 from "../../assets/img/illustrations/TransportationImage.jpg";
import Fade from "react-reveal/Fade";
export const Transportation = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
            <section id="Transportation" class="pt-4 pt-md-11 pt-40 pb-30 mb-50 ">
                <h1 className="text-center Construction_text mb-20 pt-xs-100 mb-100 TransportationText">Transportation</h1>
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
                                            Transportation Solutions
                                        </h2>
                                        <h2 class="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text2">
                                            {/* Just simply upload ANY kind of commercial Revit or
                                            AutoCAD file and download the project customized
                                            by each element to that precisely computes an accurate
                                            schedule and estimate. */}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}
