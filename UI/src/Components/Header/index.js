import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaExpand, FaUikit, FaAtom, FaGem, FaHubspot, FaGithubAlt, FaGithub, FaGitter, FaGg } from "react-icons/fa";
import './header.css';




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
        <Navbar color="dark" light className="text-white shadow border border-bottom border-info">
          <NavbarBrand href="/" className="mr-auto text-white"><FaHubspot /> R3</NavbarBrand>
          <Button   className="m-1 grad btn-sm" onClick={this.toggle}>{this.props.buttonLabel}<FaGitter /> Log-in </Button><span> </span> {' '}
          <Button   className="mr-2 grad btn-sm" color="info"><FaGg /></Button>{' '}
          <Button  onClick={this.toggleNavbar} className="mr-2 grad btn-sm" color="info"><FaExpand /></Button>{' '}
  
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="text-white" >
              <NavItem>
                <NavLink className="text-white" href="/components/"><FaUikit /> Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/"><FaExpand/> Views</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/"><FaAtom/> Widgets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/"><FaGem /> Xclusive Script</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/components/">? About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="https://github.com/ElementalXriath/Reactor"><FaGithub /> GitHub </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} charCode="Y">Login</ModalHeader>
              <ModalBody>
               
              </ModalBody>
              <ModalFooter>
                <Button color="info" onClick={this.toggle}>Login</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>NVM</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
  }
}
