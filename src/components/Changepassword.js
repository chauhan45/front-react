import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory,useParams } from 'react-router-dom'
import LoginPage from "./LoginPage";
import { ModalBoxPri } from "./Modal/ModalBox";
import axios from 'axios'

const Changepassword = () => {
    const history = useHistory();
    const [password,setPasword] = useState("");    
    const {token} = useParams();           
    const [enableloginpage, setEnableloginpage] = useState(false);
    const loginpageLinkHandler = () => {
        if (!enableloginpage) {
            setEnableloginpage(true);
        } else {
            setEnableloginpage(false);
        }
    }

    // code 

    const PostData = (e) => {            
        let url0 = window.location.href;
        let url1 = url0.split("user");
        let email0 = url1[1].substring(1,url1[1].length);
        fetch("/newpass/Newpassword",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email0
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
        console.log(password)

    }

    return (
        <>
            <section className="section-border border-primary pt-xs-100">
                <div className="container d-flex flex-column min-vh-100 ">
                    <div className="row align-items-center justify-content-center gx-0 min-vh-100">
                        <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11 size11">
                            <h3 className="mb-0 fw-bold text-center">
                                Change Your Password?
                            </h3>
                            <p className="mb-6 text-center text-muted">
                                Web app service also supports users resetting their password. Email with link to change their password is sent using AWS SES.
                            </p>
                            <div className="form-group">
                                <input type="password" className="form-control form-rounded"
                                value={password}
                              onChange={(e)=>setPasword(e.target.value)}
                                    id="password" placeholder="Enter password " />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-rounded"
                                    id="confirm_password" placeholder="Enter Confirm password " />
                            </div>
                            <button className="btn w-100  form-rounded text-light resetcolor " type="submit"
                                onClick={() => PostData()}>
                                Update Password
                            </button>
                            <hr></hr>
                            <hr></hr>
                            <p className="mb-0 fs-sm text-center text-muted ">
                                Already have an account?
                                <div className="btnlogin">
                                    <ModalBoxPri
                                        btn="Login"
                                        className="resetcolor w-100"
                                        content={enableloginpage ? <LoginPage /> : <LoginPage onloginpage={loginpageLinkHandler} />}
                                        modalClassNclassName="resetcolor"
                                    />
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Changepassword;
