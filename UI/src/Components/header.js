import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light className="text-white">
          <NavbarBrand href="/" className="mr-auto text-white">Reactor</NavbarBrand>
          <Button outline onClick={this.toggleNavbar} className="mr-2" color="primary">Nav</Button>{' '}
         
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="text-white" >
              <NavItem>
                <NavLink className="text-white" href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
