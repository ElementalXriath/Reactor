import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { validateUser } from '../../Actions/loginAction';

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      password2: '',
      passwordMatch: true,
      newUserName: true
    }
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  register = (e) => {
    e.preventDefault();
    // check if password && password2 match before sending to server
    if (this.state.password === this.state.password2) {
      // set local state to true to avoid error message
      this.setState({passwordMatch: true})
      // check for username present in database {this.state.newUserName: true || false}

      // check if username && name are alpha-numeral

      // set up userProfile object to be sent to server for entry into database
      const userProfile = {
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }

      return this.props.validateUser(userProfile)
    }
      else {
        return this.setState({passwordMatch: false})
      }
  }

  render () {
    return (
     <section>
     <h1>Register</h1>
     <p>Please register for Reactor using the form below.</p>
      <Form onSubmit={this.register}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="name"
               onChange={this.inputHandler} required/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="email"
               onChange={this.inputHandler} required/>
      </FormGroup>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="username" onChange={this.inputHandler} required />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" onChange={this.inputHandler} required />
      </FormGroup>
      {!this.state.passwordMatch ? <p>Passwords Do Not Match, Try Again</p> : null}
      <FormGroup>
        <Label for="password2">Re-type Password</Label>
        <Input type="password" name="password2" id="password2" placeholder="re-type password" onChange={this.inputHandler} required />
      </FormGroup>
      <Button>Register</Button>

      </Form>
     </section>
   );
  }
}

const mapStateToProps = state => {
  return {
    creatingUser: state.loginReducer.creatingUser,
    createdUser: state.loginReducer.createdUser
  }
}

export default connect(mapStateToProps, {validateUser})(RegisterForm);
