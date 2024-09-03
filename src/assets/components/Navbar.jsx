import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavLink from 'react-bootstrap/NavLink'
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Dafne Luna</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
          <NavLink to="/projects">My Projects</NavLink>
          <Link to="http://www.google.com">Google</Link>

          {/*
            <Nav.Link href="./src/assets/pages/Aboutme">About Me</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Contact Me</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            */}
          </Nav>

        </Container>
      </Navbar>
  )
}