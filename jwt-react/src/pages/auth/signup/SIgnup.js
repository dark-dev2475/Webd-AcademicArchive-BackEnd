import React, { useState } from 'react';
// import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './Signup.css'
import {useNavigate} from 'react-router-dom';
const SIgnup = () => {
   const navigate=useNavigate();
  const[formData,setFormData]=useState({
    email:' ',
    name:" ",
    password: ''
  })
   const handleInputChange=(event)=>
   {
    const {name, value}=event.target;
    setFormData({
      ...formData,
      [name]:value
    })
   }
   const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
       const response= await fetch("http://localhost:5000/user/register",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formData) 
        }
        )
        const result= response.json();
        console.log(result);
        navigate("/login");
    }
    catch(error){
console.error(error.message);
    }
    finally{
     setFormData({
      email:' ',
      name:" ",
      password: ''
     })
    }

   }

  return (
    
   <div className="signup-container">
      <Form onSubmit={handleSubmit}   className="signup-form">
        <h2 className="text-center mb-4">Create Account</h2>
        
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control  name="name"  type="text" placeholder="Enter your name"  value ={formData.name} onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control   name="email" type="email" placeholder="Enter your email"  value ={formData.email} onChange={handleInputChange} />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control  name="password" type="password" placeholder="Enter your password" value ={formData.password} onChange={handleInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}
export default SIgnup