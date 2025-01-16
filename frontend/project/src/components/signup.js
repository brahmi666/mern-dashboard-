import React from 'react'
import { useState } from "react";
import "./table.css";
import "./style.css";
function Register() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        date_n: '',
        mail: '',
        mdp: ''
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
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                // Registration successful
                alert('User registered successfully');
                window.location.href = '/'; // Redirect to "/login" route after successful registration
            } else if (response.status === 400) {
                // User with this email already exists
                alert('User with this email already has an account');
            } else {
                // Other errors (e.g., server errors)
                alert('Failed to register user');
            }
        } catch (error) {
            // Network errors or other unexpected errors
            console.error('Error:', error);
            alert('An unexpected error occurred while registering user');
        }
    };
    
    


    return (
    <section class="vh-100">
    <div class="container-fluid h-custom">
    
    <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        class="img-fluid" alt="Sample"/>
    </div>
    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
<div class="card d-flex justify-content-center login">
        <div class="divider d-flex align-items-center my-4">
        <p class="lead fw-normal mb-0 me-3">Create account:</p>
        </div>
        <div class="form-outline mb-4">
            <input type="text" id="nom" class="form-control form-control-lg" placeholder="enter your name" onChange={handleChange}/>
            <label class="form-label" for="form3Example3">name</label>
        </div>

        <div class="form-outline mb-4">
            <input type="text" id="prenom" class="form-control form-control-lg" placeholder="enter your surname"onChange={handleChange} />
            <label class="form-label" for="form3Example3">surname</label>
        </div>
        
        <div class="form-outline mb-4">
            <input type="email" id="mail" class="form-control form-control-lg" placeholder="Enter a valid email address" onChange={handleChange}/>
            <label class="form-label" for="form3Example3">Email address</label>
        </div>

        <div class="form-outline mb-4">
            <input type="date" id="date_n" min="1950-01-01" max="2005-12-31" class="form-control form-control-lg" onChange={handleChange}/>
            <label class="form-label" for="form3Example3">birth date</label>
        </div>
            
        <div class="form-outline mb-3">
            <input type="password" id="mdp" class="form-control form-control-lg" placeholder="Enter password" onChange={handleChange} />
            <label class="form-label" for="form3Example4">Password</label>
        </div>

        

        <div class="text-center text-lg-start mt-4 pt-2">
        <button onClick={handleSubmit} className="btn btn-primary btn-lg">Register</button>

            <p class="small fw-bold mt-2 pt-1 mb-0">alraedy have an account? <a href="/"
                class="link-danger">login</a></p>
        </div>
</div>
        </form>
    </div>
    </div>
</div>
</section>
    )
}
export default Register