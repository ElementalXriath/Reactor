import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import Logo from './logo.jpg';
import { FaExpand, FaUikit, FaAtom, FaGem  } from "react-icons/fa";

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
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded" >
        <CardTitle><FaUikit /></CardTitle>
          <CardTitle>Components</CardTitle>
          <CardText>Search Reactors Component Lib.</CardText>
          <Button color="primary">Go</Button>
        </Card>
      </Col>
      <Col xs="6" sm="6">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded">      
        <CardTitle><FaExpand /></CardTitle>
          <CardTitle>Views</CardTitle>
          <CardText>Serach Reactors Views Lib.</CardText>
          <Button>Go</Button>
        </Card>
      </Col>
        </Row>
        <Row>       
        <Col xs="6" sm="6">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded">
        <CardTitle><FaAtom /></CardTitle>
          <CardTitle>Widgets</CardTitle>
          <CardText>Search Reactors Widget Lib.</CardText>
          <Button color="primary">Go</Button>
        </Card>
      </Col>
      <Col xs="6" sm="6">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded">    
        <CardTitle><FaGem /></CardTitle>
          <CardTitle>Exclusive</CardTitle>
          <CardText>Serach Reactors X Lib.</CardText>
          <Button>Go</Button>
        </Card>
      </Col>
        </Row>
      </Container>
     

        );
    }
}
