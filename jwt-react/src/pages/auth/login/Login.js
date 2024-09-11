import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css'; // Optionally, you can add custom CSS for styling
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response= await fetch("http://localhost:5000/auth/login",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(formData) 
         }
         )
         const result= await response.json();
         console.log(result);
         navigate("/dashboard");
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
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2 className="text-center mb-4">Login</h2>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            name="email"
            value={formData.email} 
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Enter your password" 
            name="password"
            value={formData.password} 
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
