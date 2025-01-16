import React from 'react'
import { useState } from "react";
import "./table.css";
import "./style.css";
function Login() {

    const [formData, setFormData] = useState({
        mail: '',
        passwd: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.isAdmin) {
                    window.location.href = '/admin'; // Redirect to admin page
                } else {
                    window.location.href = '/dashboard'; // Redirect to user dashboard
                }
            } else if (response.status === 401) {
                alert('Invalid email or password');
            } else {
                alert('Failed to login');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred while logging in');
        }
    };
    


    return (
    <section class="vh-100">
    <div class="container-fluid h-custom">
    <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">
    <div class="text-white mb-3 mb-md-0">
    </div>

    </div>
    <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        class="img-fluid" alt="Sample"/>
    </div>
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
        <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">    
        </div>
<div class="card d-flex justify-content-center login">
        <div class="divider d-flex align-items-center my-4">
        <p class="lead fw-normal mb-0 me-3">Sign in:</p>

        </div>

        <div class="form-outline mb-4">
            <input type="email" id="mail" class="form-control form-control-lg" placeholder="Enter a valid email address" onChange={handleChange}/>
            <label class="form-label" for="form3Example3">Email address</label>
        </div>

        <div class="form-outline mb-3">
            <input type="password" id="passwd" class="form-control form-control-lg" placeholder="Enter password" onChange={handleChange}/>
            <label class="form-label" for="form3Example4">Password</label>
        </div>

        <div class="text-center text-lg-start mt-4 pt-2">
        <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                class="link-danger">Register</a></p>
        </div>
</div>
        </form>
    </div>
    </div>
</div>
<div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary fixed-bottom">
    <div class="text-white mb-3 mb-md-0">
    Copyright © 2024. All rights reserved.
    </div>
    </div>

</section>
    )
}
export default Login



