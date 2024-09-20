import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';


const Styles = styled.div `    
    a,  .navbar-nav, .nav-link {   // .navbar-brand,
        color: #FEFAE0;
        &:hover {
            color: #C7C8CC
        }
    }
`


const NaviBar = () => {
    return(
        <div>
    <Styles>
    <Navbar style={{ position: 'fixed', width: '100%' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand style={{fontFamily: 'cursive', fontSize: '30px', color: '#F2EFE5'}}>Mackenzie Interiors</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ marginLeft: 'auto'}}>
                    <Nav.Link> <Link style={{textDecorationLine: 'none', marginRight: '50px', fontSize: '17px'}} to="/">Home</Link>  </Nav.Link>
                    <Nav.Link> <Link style={{textDecorationLine: 'none', marginRight: '50px', fontSize: '17px'}} to="/about">About</Link>  </Nav.Link>
                    <Nav.Link> <Link style={{textDecorationLine: 'none', marginRight: '50px', fontSize: '17px'}} to="/residential-projects">Residential</Link>  </Nav.Link>
                    <Nav.Link> <Link style={{textDecorationLine: 'none', marginRight: '50px', fontSize: '17px'}} to="/commercial-projects">Commercial</Link>  </Nav.Link>
                    <Nav.Link> <Link style={{textDecorationLine: 'none', marginRight: '50px', fontSize: '17px'}} to="/questions">FAQ</Link>  </Nav.Link>
                    <Nav.Link> <Link style={{textDecorationLine: 'none', marginRight: '140px', fontSize: '17px'}} to="/contact">Contact</Link>  </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    </Styles>
        </div>
    )
}

export default NaviBar;