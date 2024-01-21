import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap';
import logo from './logo192.png';
import {BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Forma from '../pages/Forma';
import Spisok from '../pages/Spisok';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                heigt="150"
                                width="150"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> 
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                <Nav.Link href="/" > ДОМОЙ </Nav.Link>
                                <Nav.Link href="/spisok" > АССОРТИМЕНТ </Nav.Link>
                                <Nav.Link href="/forma" > ОБРАТНАЯ СВЯЗЬ </Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                               <FormControl
                                    type="text"
                                    placeholder="ПОИСК"
                                    className="me-sm-3"
                                />
                                <Button variant="outline-info">НАЙТИ</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
            <Router>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/spisok" element={<Spisok/>} />
                <Route exact path="/forma" element={<Forma/>} />
              </Routes>





            </Router>



            </>
        )
    }
}