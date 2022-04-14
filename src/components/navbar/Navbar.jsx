import React from 'react'
import logo from '../../assets/Logo.svg'
import {Navbar, Container, Form, Nav, NavDropdown, FormControl, Button } from 'react-bootstrap'

// utiliser bootstrap pour créer la navbar 

function navbar() {
  return (
    <Navbar expand="lg">
  <Container fluid >
    <Navbar.Brand href="#"> <img src={logo} alt="domoswap" /> </Navbar.Brand>
    <Form className="d-flex " >
        <FormControl
          type="search"
          placeholder="Where are you going?"
          className="me-2"
          aria-label="Search"
        />
      <Button variant="primary">Search</Button>
      </Form>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse className="justify-content-end"  id="navbarScroll">
      <Nav
        className="my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Discover">Discover</Nav.Link>
        <Nav.Link href="#Howitworks"> how does it work ?</Nav.Link>
        <Nav.Link> Sign in </Nav.Link>
        <Button  variant='primary' >Sign up </Button>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default navbar