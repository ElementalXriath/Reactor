import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaExpand, FaUikit, FaAtom, FaGem, FaHubspot } from "react-icons/fa";
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      modal: false
    };
   
   
    this.toggle = this.toggle.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light className="text-white">
          <NavbarBrand href="/" className="mr-auto text-white"><FaHubspot />Reactor</NavbarBrand>
          <Button outline onClick={this.toggleNavbar} className="mr-2" color="primary"><FaExpand /></Button>{' '}
          <Button color="success" onClick={this.toggle}>{this.props.buttonLabel} Login</Button>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="text-white" >
              <NavItem>
                <NavLink className="text-white" href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/">Views</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/">Widgets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} charCode="Y">Login</ModalHeader>
              <ModalBody>
               
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>ghy</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
  }
}
