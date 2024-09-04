import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router-dom";

export default function NavTabs() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="me-auto"
    >
    <Navbar expand="lg" className="navbar" fixed='top'>
        <Container>
          <NavLink to="/">Dafne Luna</NavLink>
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
          <NavLink to="/projects">Portfolio</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </Container>
      </Navbar>
    </Nav>
  )
}