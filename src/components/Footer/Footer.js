import React from 'react'
import a from '../../assets/img/logo.png'
import b from '../../assets/img/icons/social/instagram.svg'
import c from '../../assets/img/icons/social/facebook.svg'
import d from '../../assets/img/icons/social/twitter.svg'
import e from '../../assets/img/icons/social/pinterest.svg'
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 py-md-11 bg-gray-200 pt-100 pb-70 footer pt-xs-40">
      <div className="container">
        <div className="row pl-50 pr-50">
          <div className="col-12 col-md-4 col-lg-3 ">
            {/* Logo */}

            <Link to="/" className="">
              <img src={a} alt="..." className="footer-brand img-fluid mb-2 p-10 footer-logo" />
            </Link>
            <p className="text-gray-700 mb-2">
              AI Powered Scheduling <br /> & Estimating Software
            </p>

            <ul className="list-unstyled list-inline list-social mb-6 mb-md-0 pb-40">
              <li className="list-inline-item list-social-item me-3">
                <a href="#!" className="text-decoration-none">
                  <img src={b} className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="#!" className="text-decoration-none">
                  <img src={c} className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item me-3">
                <a href="#!" className="text-decoration-none">
                  <img src={d} className="list-social-icon" alt="..." />
                </a>
              </li>
              <li className="list-inline-item list-social-item">
                <a href="#!" className="text-decoration-none">
                  <img src={e} className="list-social-icon" alt="..." />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="title text-uppercase text-blue">Products</h3>

            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">

              <li className="mb-3">
                <Link to="/products" className="text-reset"
                  onClick={() => window.location.replace("#Estimation")}> Estimation </Link>
              </li>
              <li className="mb-3">
                <Link to="/products" className="text-reset"
                  onClick={() => window.location.replace("#Scheduling")}> Scheduling </Link>
              </li>
              <li className="mb-3">
                <Link to="/products" className="text-reset"
                  onClick={() => window.location.replace("#Visual_Editing")}> Visual Editing  </Link>
              </li>
              <li className="mb-3">
                <Link to="/products" className="text-reset"
                  onClick={() => window.location.replace("#Cost_alerts")}>   Cost alerts </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="title text-uppercase text-blue">Partners</h3>
            <ul className="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li className="mb-3">
                <Link to="/program" className="text-reset" > Channel </Link>
              </li>
              <li className="mb-3">
                <Link to="/systemintegrators" className="text-reset" >  Technology </Link>
              </li>
              <li className="mb-3">
                <Link to="/technology" className="text-reset" > Data</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">
            <h3 className="title text-uppercase text-blue">Solutions</h3>
            <ul className="list-unstyled text-muted mb-0">
              <li className="mb-3">
                <Link to="/Solution" className="text-reset"
                  onClick={() => window.location.replace("#Residential")}>Residential</Link>
              </li>
              <li className="mb-3">
                <Link to="/Solution" className="text-reset"
                  onClick={() => window.location.replace("#Commercial")} >Commercial</Link>
              </li>
              <li className="mb-3">
                <Link to="/Solution" className="text-reset"
                  onClick={() => window.location.replace("#Industrial")}>Industrial</Link>
              </li>
              <li className="mb-3">
                <Link to="/Solution" className="text-reset"
                 onClick={() => window.location.replace("#Transportation")} > Transportation</Link>
              </li>
              <li className="mb-3">
                <Link to="/Solution" className="text-reset"
                 onClick={() => window.location.replace("#Publicsector")} > Public Sector</Link>
              </li>
              <li className="mb-3">
                <Link to="/Solution" className="text-reset" 
                onClick={() => window.location.replace("#Union")}> Union</Link>
              </li>
              <li className="mb-3">
                <Link to="/Solution" className="text-reset"
                onClick={() => window.location.replace("#Renovation")} > Renovation</Link>
              </li>
              <li>
                <Link to="/Solution" className="text-reset" 
                 onClick={() => window.location.replace("#Subcontractors")}> Sub-Contractors</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="title text-uppercase text-blue">About</h3>

            <ul className="list-unstyled text-muted mb-0">

              <li className="mb-3">
                <Link to="/team" className="text-reset" >Team</Link>

              </li>
              <li className="mb-3">
                <Link to="/press" className="text-reset" > Press</Link>

              </li>
              <li>
                <Link to="/careers" className="text-reset" > Careers</Link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
