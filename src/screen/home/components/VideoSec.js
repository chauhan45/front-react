import React from "react";
import a from "../../../assets/img/illustrations/pic-1.png";
import b from "../../../assets/img/illustrations/pic-2.png";
import c from "../../../assets/img/illustrations/pic-3.png";
import video from "../../../assets/video/video-1.mp4";
import Fade from "react-reveal/Fade";
const VideoSec = () => {
  return (
    <>
      {/* Top 3 Card  */}
      <section className="py-8 py-md-11 pb-80 pt-80 pb-xs-30 pt-xs-40 bg-light-grey ">
        <div className="container">
          <div className="constructionScheduleDiv row ml-20">
            <Cards
              title="Construction Schedule"
              image={a}
              detail="Our solution in seconds takes your construction plans and runs a state of art machine learning algorithm that determines the fastest and most cost effective way to build your structure"
              className="running-text"
            />
            <Cards
              title="Local Cost Estimates"
              image={b}
              detail="Based on your construction schedule we then are able to determine within 3% your total construction costs within minutes"
            />
            <Cards
              title="Bi-Monthly Cost Alerts"
              image={c}
              detail="Our system constantly monitors price changes in materials, labor, and equipment costs and alerts you when they change"
            />
          </div>
        </div>
      </section>

      {/* Video Sec */}
      <section className="py-8 py-md-11 pb-80 pt-80 pt-xs-30 videoSec pb-xs-60">
        <div className="container">
          <div className="row pl-50 pr-50 align-items-center">
            <div
              className="col-12 col-md-6 " 
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Fade bottom>
              <h2 class="">
                Watch our video <span className="text-blue"></span> to see how <span className="text-blue">fast</span>  we <span className="text-blue">upload</span>   and   <span className="text-blue">process</span> your plans with our <span className="text-blue">Artificial Intelligence </span> engine
              </h2>
              </Fade>
            </div>

            <div
              className="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Fade bottom>
              <div className="row justify-content-center">
                <video width="400" controls>
                  <source
                    src={video}
                    className="row justify-content-center"
                    type="video/mp4"
                  />
                </video>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Cards = (props) => {
  const { title, detail, image } = props;
  return (
    <>
    <Fade bottom>
      <div className="col-12 col-md-4 cards mb-xs-30" data-aos="fade-up">
        <img src={image} />
        <div className="icon11  mb-10">
          <h3 className="cardTitle">{title}</h3>
        </div>
        <p className="text-muted mb-6 mb-md-0 pr-20">{detail}</p>
      </div>
      </Fade>
    </>
  );
};
export default VideoSec;
