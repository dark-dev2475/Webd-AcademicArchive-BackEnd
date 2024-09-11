import React from 'react'
import{Navbar,Container,Nav} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  const token =localStorage.getItem("token");
  const navigate=useNavigate();
  const handleLogout=()=>{
              localStorage.removeItem("token");
              navigate("/login");
  }
  return (
    <>
   <Navbar className="custom-navbar" bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand as={Link} to="" >{token? "Logged-In":"Not-loggedin"}</Navbar.Brand>
    <Nav className="ms-auto">
      {token ?(
      <>
      <Nav.Link as={Link} to="/dashboard" >Dashboard</Nav.Link>
      <Nav.Link onClick={handleLogout} >Logout</Nav.Link>
      </>
      ):(
        <>
      <Nav.Link as={Link} to="/login" >Login</Nav.Link>
      <Nav.Link as={Link} to="/register">Signup</Nav.Link>
      </>
      )}
     
    </Nav>
  </Container>
</Navbar>

      
    </>
  )
}

export default Header