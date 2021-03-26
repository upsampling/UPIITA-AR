import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect className="sticky-top navbar-dark bg-dark " expand='xl'>

                <Link to="/home" className="navbar-brand font-weight-bold">UPIITA-AR</Link>

                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    
                    <Navbar.Collapse id='responsive-navbar-nav' >

                        <Nav className="mr-auto" >
 
                        </Nav>
                        <Nav>
                            <Container></Container> 
                            <NavLink exact to="/home" className=" text-white text-center nav-item nav-link"> Inicio </NavLink>
                            <NavLink exact to="/aboutus" className=" text-white text-center nav-item nav-link"> Nosotros </NavLink>
                            <NavLink exact to="/category" className="text-white text-center nav-item nav-link"> Categorias </NavLink>  
                            <NavLink exact to="/contact" className="text-white text-center nav-item nav-link"> Contactanos </NavLink>  

                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
            
        </>
    );
}
