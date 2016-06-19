import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
          <header className="header">
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">
                    <img src={require('../../assets/images/logo.png')} />
                    Logo
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <IndexLinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></IndexLinkContainer>
                  <LinkContainer to="/about"><NavItem eventKey={4}>About</NavItem></LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
        )
    }
}