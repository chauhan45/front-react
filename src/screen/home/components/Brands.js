import React from 'react'
import plane1 from "../../../assets/img/illustrations/plane-1.png";

const Brands = () => {
  return (
    <>
    {/* Full width Blue Background Section  */}
      <section id="brands" className="py-8 py-md-11 bg-dark pt-80 pb-80 pt-xs-40 pb-xs-40 pl-xs-15 pr-xs-15 bg-blue-img " style={{
        backgroundImage: ({plane1})
      }}>
      <div class="col-12 col-md-5 col-lg-5 order-md-2 ">
              {/* <img src={plane} alt="..." class="img-fluid mb-4 mb-md-0 plane-ticket" /> */}
            </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-10 text-center">
              <h2 className="display-8 text-1 mb-30 font-bold Intelligence-h2">
                Using our Artificial Intelligence Engine is as easy as <br/> <span> booking a plane ticket online </span>
              </h2>
              <h3 className="text-white Intelligence-h3" >
              You simply upload your Autodesk 2D or 3D BIM file and download your construction schedule and cost estimate
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Brands
