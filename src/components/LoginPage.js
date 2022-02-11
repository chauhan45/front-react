
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: '',
            formErrors: {}
        };
        this.initialState = this.state;
        this.emailOnChange = this.emailOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleFormValidation() {
        const { email, password } = this.state;
        let formErrors = {};
        let formIsValid = true;
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            formIsValid = false;
            formErrors["emailErr"] = "Invalid email id.";
        }
        if (!password) {
            formIsValid = false;
            formErrors["passwordErr"] = "password  is required.";
        }
        this.setState({ formErrors: formErrors });
        return formIsValid;
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.handleFormValidation()) {

            this.setState(this.initialState)
            const data = {

                email: this.state.email,
                password: this.state.password
               
            };

            axios.post("/auth/login", data)
                .then((result) => { console.log(result); })
                .catch((error) => { console.log(error); });
                
            // alert('You have been successfully registered.')

        }


        // try {
        //   const {Email ,password} = req.body;
        //   if(!Email || !password){
        //     return res.status(400).json({error:"plz fill the data "})
        //   }
        //   const userLogin = await User.findOne({Email:Email});
        //   console.log(userLogin);
        //   if(!userLogin){
        //     res.status(400).json({error:" user error"});

        //   }else{
        //     res.json({message:"user Signin success"});
        //   }

        // } catch (error) {

        //   console.log(err);
        // }



    }

    emailOnChange(e) {
        this.setState({ email: e.target.value });
    }
    passwordOnChange(e) {
        this.setState({ password: e.target.value });
    }
    render() {
        const { emailErr, passwordErr } = this.state.formErrors;
        return (
            <>
                <section class="section-border border-primary size-login pt-xs-100">
                    <div class="container d-flex flex-column">
                        <div class="row align-items-center justify-content-center gx-0 min-vh-100 ">
                            <div class="col-12 col-md-5 col-lg-4 py-8 py-md-11 size11">
                                <h2 class="mb-0 fw-bold text-center">
                                    Welcome Back!
                                </h2>
                                <p class="mb-6 text-center text-muted">
                                    Users associated with an already existing account can actually login! For real!
                                </p>
                                <form class="mb-6" onSubmit={this.onSubmit}>
                                    <div class="form-group ">
                                        <label class="form-label" for="email">
                                            Email Address
                                        </label>
                                        <input type="email" id="email" placeholder="name@address.com" onChange={this.emailOnChange} value={this.state.email}
                                            className="form-control  {emailErr ? ' showError' : ''}" />
                                        {emailErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
                                        }
                                    </div>
                                    <div class="form-group mb-5 ">
                                        <label class="form-label" for="password">
                                            Password
                                        </label>
                                        <input type="password" id="password" placeholder="Enter your password" onChange={this.passwordOnChange} value={this.state.password}
                                            className="form-control  {passwordErr ? ' showError' : ''}" />
                                        {passwordErr &&
                                            <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
                                        }
                                    </div>
                                    <button class="btn w-100 btn-primary form-rounded login_color" onClick={this.login}
                                        onSubmit={this.handleSubmit} type="submit">
                                        Sign in
                                    </button>
                                    <hr></hr>
                                </form>
                                <p class="mb-0 fs-sm text-center text-muted">
                                    {/* Don't have an account yet <NavLink to="/signup"> Signup </NavLink> <br /> */}
                                    <button class="btn w-100 btn-primary form-rounded login_color " onClick={this.props.onForgotPassword}>Forgot your password? </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
