import React, { Component } from 'react'
import { Container, Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, useRouteMatch } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import logo from './logo192.png'

import Home from '../Pages/Home';
import BooksList from '../Pages/BooksList';
import BookItem from '../Pages/BookItem';
import About from '../Pages/About';

import Classic from '../Pages/Category/Classic';
import Dramatic from '../Pages/Category/Dramatic';
import Detective from '../Pages/Category/Detective';
import Fantasy from '../Pages/Category/Fantasy';


export default class AppNavBar extends Component {

    render() {
        return (
            <>
                <div>
                    <Navbar collapseOnSelect expand="md" bg='dark' variant="dark">
                        <Container>
                            <Navbar.Brand href="/">
                                <img
                                    src={logo}
                                    height="30"
                                    width="30"
                                    className='d-inline-block align-top'
                                    alt="logo"
                                /> ALibrary
                            </Navbar.Brand>
                            <NavbarToggle aria-controls='responsive-navbar-nav' />
                            <NavbarCollapse id='responsive-navbar-nav' >
                                <Nav className="me-auto">
                                    {/* <NavLink href="/"> Home </NavLink> */}
                                    <NavLink href="/books"> Books </NavLink>
                                    <NavDropdown href="/category" title="Category" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/classic">Classic</NavDropdown.Item>
                                        <NavDropdown.Item href="/fantasy">Fantasy</NavDropdown.Item>
                                        <NavDropdown.Item href="/detective">Detective</NavDropdown.Item>
                                        <NavDropdown.Item href="/dramatic">Dramatic</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavLink href="/About"> About </NavLink>
                                </Nav>
                            </NavbarCollapse>
                        </Container>
                    </Navbar>
                </div>

                <div>
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path="/books" element={<BooksList />} />
                            <Route path='/books/:id' element={<BookItem />} />
                            <Route path="/about" element={<About />} />

                            <Route path="/fantasy" element={<Fantasy />} />
                            <Route path="/detective" element={<Detective />} />
                            <Route path="/dramatic" element={<Dramatic />} />
                            <Route path="/classic" element={<Classic />} />

                        </Routes>
                    </Router>
                </div>

            </>
        )
    }
}
