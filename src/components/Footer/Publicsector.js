import {React , useEffect} from 'react'
import building2 from "../../assets/img/illustrations/pre5.jpeg";
import Fade from "react-reveal/Fade";

export const Publicsector = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <>
            <section id="Publicsector" className=" pt-4 pt-md-11 pt-40 pb-30 mb-50 ">
                <h1 className="text-center Construction_text mb-20 pt-xs-100 mb-100 PublicsectorText">Public Sector</h1>
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
                                <h2 className="text-center text-md-start mb-20 pr-20 Construction_text ">
                                    Any Residential Home
                                </h2>
                                <p className="lead text-center text-md-start mb-6 mb-lg-8 mb-40 Construction_text1">
                                View your entire construction plans online and visually edit any
                                 component. Easily change construction materials or compare
                                  construction change request. Easily group construction 
                                  materials or identify cost components visually.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}
