import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink , Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FaExpand, FaUikit, FaAtom, FaGem, FaHubspot, FaGithubAlt, FaGithub, FaGitter, FaGg } from "react-icons/fa";
import './header.css';

import { Link, NavLink as NavLINK } from 'react-router-dom';
import { connect } from 'react-redux';
import {FETCHING_USER, FETCHED_USER, USER_ERROR, validateUser } from '../../Actions/loginAction';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      modal: false,
      user: '',
      pass: ''
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
// using this syntax you wont have to bind to this in the constructor
  onChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  getLogin = () => {
    this.props.validateUser({
      user: this.state.user,
      pass: this.state.pass
    })
  }


  render() {


    return (
      <div>
        <Navbar color="dark" light className="text-white shadow border border-bottom border-info">
          <Link to="/" className="mr-auto text-white" style={{"text-decoration": 'none'}}><FaHubspot /> R3</Link>
          <Button   className="m-1 grad btn-sm" onClick={this.toggle}>{this.props.buttonLabel}<FaGitter /> Log-in </Button><span> </span> {' '}
          <Button   className="mr-2 grad btn-sm" color="info"><FaGg /></Button>{' '}
          <Button  onClick={this.toggleNavbar} className="mr-2 grad btn-sm" color="info"><FaExpand /></Button>{' '}

          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="text-white" >
              <NavItem>
                <NavLINK to='/components'>
                  <NavLink className="text-white">
                    <FaUikit /> Components
                  </NavLink>
                </NavLINK>
              </NavItem>
              <NavItem>
                <NavLINK to='/views'>
                  <NavLink className="text-white"><FaExpand/> Views</NavLink>
                </NavLINK>
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
              <NavLINK to='/register'>
                <NavLink className="text-white">
                  {/* add icon for register and state to remove link when logged in*/}
                   ~~Register
                </NavLink>
              </NavLINK>
            </Nav>
          </Collapse>
        </Navbar>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} charCode="Y">Login</ModalHeader>
              <ModalBody>
                <Input type='text' onChange={this.onChangeHandler} placeholder='Username' value={this.state.username}
                name='user'/>
                <br />
              <Input type='password' onChange={this.onChangeHandler} placeholder='Password' value={this.state.password}
              name='pass'/>
              </ModalBody>
              <ModalFooter>
                <Button color="info" onClick={this.getLogin}>Login</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>NVM</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingUser: state.loginReducer.fetchingUser,
    fetchedUser: state.loginReducer.fetchedUser
  }
}

export default connect(mapStateToProps, {validateUser})(Example)
