import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../../assets/img/logo.png";
import { Col, Container, Row } from "reactstrap";
import { FaWindowClose, FaRegWindowClose, FaAngleDown, FaAngleRight } from "react-icons/fa";
import ModalBox, { ModalBoxPri } from "../Modal/ModalBox";
import { NavLink, Link } from "react-router-dom";
import SignupPage from "../SignupPage";
import LoginPage from "../LoginPage";
import ForgotPassword from "../ForgotPassword";


const Header = () => {

  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  const [enableForgotPass, setEnableForgotPass] = useState(false);


  const forgotPasswordLinkHandler = () => {
    if (!enableForgotPass) {
      setEnableForgotPass(true);
    } else {
      setEnableForgotPass(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <>
      <Styles.Wrapper className="pt-md-11 p-10 header justify-content-center">
        {/* <CSSReset /> */}
        <div className="header_mobile ">
          <Navbar.Wrapper className="pt-0 ">
            <Container fluid={true} >
              <Row>
                {/* logo */}
                <Col md={1} sm={3}>
                  <Link to="/" className="navbar-brand float-l pt-0">
                    <img src={logo} id="logo-main" className="navbar-brand-img" alt="..." />
                  </Link>
                  <HamburgerButton.Wrapper
                    className="hamburger-menu-icon"
                    onClick={() => toggleDrawer(true)}
                  >
                    <HamburgerButton.Lines />
                  </HamburgerButton.Wrapper>
                </Col>
                {/* Navigation */}
                <Col md={11} sm={9}>
                  <Navbar.Items ref={drawerRef} openDrawer={openDrawer} >
                    {openDrawer == true && (
                      <a
                        className="cloneBtn"
                        onClick={() => {
                          toggleDrawer(false);
                        }}
                      >
                        <FaRegWindowClose />
                      </a>
                    )}

                    <Link to="/Products" className="dropdown jeRnwg iLHmNk"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    >
                      Products
                      <div class="dropdown-content">
                        <Link to="/products" className="submenu"
                          onClick={() => { window.location.replace("#Estimation"); toggleDrawer(false); }}
                        >
                          Estimation
                        </Link>
                        <Link to="/products" className="submenu"
                          onClick={() => { window.location.replace("#Scheduling"); toggleDrawer(false); }}
                        >
                          Scheduling
                        </Link>

                        <Link className="submenu" to="/products"
                          onClick={() => { window.location.replace("#Visual_Editing"); toggleDrawer(false); }}
                        >
                          Visual Editing
                        </Link>
                        <Link className="submenu" to="/products"
                          onClick={() => { window.location.replace("#Cost_alerts"); toggleDrawer(false); }}
                        >
                          Cost alerts
                        </Link>
                      </div>
                    </Link>
                    <Link to="/howitworks" className="jeRnwg iLHmNk Howit"
                      onClick={() => { window.location.replace("#howitworks"); toggleDrawer(false); }}
                    >How It Works</Link>
                    <Link to="/benefits" className="jeRnwg iLHmNk"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    >Benefits</Link>
                    <Link to="/integrations" className="jeRnwg iLHmNk"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    >Integrations</Link>
                    <Link to="/partners" className="dropdown jeRnwg iLHmNk"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    >Partners
                      <div className="dropdown-content">
                        <Link to="/partnersignup" className="submenu"
                          onClick={() => {
                            toggleDrawer(false);
                          }}
                        >
                          Join As Partners
                        </Link>
                      </div>
                    </Link>
                    <Link to="/aboutus" className="jeRnwg iLHmNk Aboutus"
                      onClick={() => {
                        toggleDrawer(false);
                      }}
                    >About Us</Link>


                    {/* <Navbar.Item to="/AboutUs"  >About</Navbar.Item> */}

                    {/* <Navbar.Item className="dropdown">
                  About
                  <div class="dropdown-content">
                    <a className="submenu" href="#">
                      Settings
                      <FaAngleRight className="float-r" />
                      <div class="dropdown-menu">
                        <Link to="/Dashboard" exact class="dropdown-item" >
                          Dashboard
                        </Link>
                        <Link class="dropdown-item" href="">
                          General
                        </Link>
                        <Link class="dropdown-item" href="">
                          Security
                        </Link>
                        <Link class="dropdown-item" href="">
                          Notifications
                        </Link>
                        <Link class="dropdown-item" href="">
                          Plans &amp; Payment
                        </Link>
                        <Link Settingsclass="dropdown-item" href="">
                          Users
                        </Link>
                      </div>
                    </a>
                  </div>
                </Navbar.Item> */}
                    {/* <a class="btn btn-primary lift ml-auto singIn">Sign in</a> */}
                    {/* Sign up Button  */}
                    <div className="nav-button-container">
                      <ModalBoxPri
                        btn="Sign Up"
                        content={<SignupPage />}
                        modalClass="ml-auto singup"
                      />
                      {/* Sign In Button  */}
                      <ModalBoxPri
                        btn="Sign In"
                        // title="Sign In"
                        // content={<SignIn  />}
                        content={enableForgotPass ? <ForgotPassword /> : <LoginPage onForgotPassword={forgotPasswordLinkHandler} />}
                        modalClass="ml-auto singup"
                      />
                    </div>
                  </Navbar.Items>
                </Col>
              </Row>
            </Container>
          </Navbar.Wrapper>
        </div>
      </Styles.Wrapper>
    </>
  );
};



const Styles = {
  Wrapper: styled.main`
    display: flex;
    // background-color: #eeeeee;
    // height: 100vh;
  `,
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    ${'' /* @media only screen and (max-width:2336px) {
      justify-content: center;
      margin-left:140px;
    }
    @media only screen and (min-width:2140px) {
      justify-content: center;
      margin-left:440px;
      align-items: center;
    }
    @media only screen and (min-width:1940px) {
      justify-content: center;
      align-items: center;
      margin-left:290px;
    } */}
    ${'' /* @media only screen and (max-width:1940px) {
      justify-content: center;
      background-color: #42ba96;
    
    } */}

    // 40em == 640px
    @media (max-width: 600px){
    .dropdown-content a {
    padding: 0px 0px;
    font-weight: 400;
    display: block;
    margin-top: 7px;
}
    }
    @media only screen and (max-width: 900px) {
      .header_mobile{
    margin-top: 60px;
    
   }
   .nav-button-container{
    margin-right : 80px
   } 
   button.hamburger-menu-icon{
     float: right;
     top: 25px;
   }
   .jeRnwg {
      display: block !important;
      width: 100%;
     
    }
   .iLHmNk{
    justify-content: center;
   height:auto;
   padding:27px;
   margin-top: -27px;
   padding-top: 30px !important;
   }
  

    }
    @media only screen and (max-width: 900px) {
      position: fixed;
      width: 100vw;
      top: 0;
      left: 0;
      z-index: 11;
      box-shadow: 0px 3px 7px 0px #00000036;

    }
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
    
  `,
  Items: styled.ul`padding-top: 30px !important;
    display: flex;
    list-style: none;
    padding-left: 90px;
    padding-top: 20px;
   
    @media only screen and (max-width: 900px) {
      position: fixed;  
      right: 0;
      top: 0;
      height: 100%;
      background-color: white;
      padding: 1rem 2rem;
      transition: 0.2s ease-out;
     
      transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 10px 10px;
    cursor: pointer;
    color: #506690;
    font-weight: 700;
    font-size: 20px;
    @media only screen and (max-width: 900px) {
      padding: 1rem 0;
      
    }
  `,
};
const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 2rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 900px) {
      display: block;
      
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
};

// const CSSReset = createGlobalStyle`
//   *,
//   *::before,
//   *::after {
//     margin: 0;
//     padding: 0;
//     box-sizing: inherit;
//   }

export default Header;
