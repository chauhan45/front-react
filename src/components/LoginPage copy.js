import React, { Component } from 'react'

function LoginPage () {
   
        return (
            <>
                <section class="section-border border-primary">
                <div class="container d-flex flex-column">
                    <div class="row align-items-center justify-content-center gx-0 min-vh-100">
                    <div class="col-12 col-md-5 col-lg-4 py-8 py-md-11">
                        <h1 class="mb-0 fw-bold text-center">
                        Sign in
                        </h1>
                        <p class="mb-6 text-center text-muted">
                            Simplify your workflow in minutes.
                        </p>
                        <form class="mb-6">
                        <div class="form-group">
                            <label class="form-label" for="email">
                            Email Address
                            </label>
                            <input type="email" class="form-control" id="email" placeholder="name@address.com" />
                        </div>
                        <div class="form-group mb-5">
                            <label class="form-label" for="password">
                            Password
                            </label>
                            <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <button class="btn w-100 btn-primary" type="submit">
                            Sign in
                        </button>
                        </form>
                        <p class="mb-0 fs-sm text-center text-muted">
                        Don't have an account yet <a href="signup.html">Sign up</a>.
                        </p>
                    </div>
                    </div> 
                </div> 
                </section>
            </>
        )
    }
    export default LoginPage;
