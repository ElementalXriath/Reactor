import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import Logo from './logo.jpg';
import { FaExpand } from "react-icons/fa";
import { FaUikit } from "react-icons/fa";
export default class MainView extends React.Component {
  render() {
    return (


    <Container className="text-center">
        <br />
        <Row> 
        <Col xs="12" sm="12" className="text-center">
            <h1>Reactor</h1>
           <img src={Logo} className="img-thumbnail" /> 
             
        </Col>
        </Row>
        <br />
        <Row>
        
        <Col xs="6" sm="6">
        <Card body>
        <CardTitle><FaUikit /></CardTitle>
          <CardTitle>Components</CardTitle>
          <CardText>Search Reactors Component Lib.</CardText>
          <Button color="primary">Go</Button>
        </Card>
      </Col>
      <Col xs="6" sm="6">
        <Card body>
        
        <CardTitle><FaExpand /></CardTitle>
          <CardTitle>Views</CardTitle>
          <CardText>Serach Reactors Views Lib.</CardText>
          <Button>Go</Button>
        </Card>
      </Col>
        </Row>
      </Container>
     

        );
    }
}
