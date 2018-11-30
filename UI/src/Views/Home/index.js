import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Alert } from 'reactstrap';
import Logo from './logo.jpg';
import { FaExpand, FaUikit, FaAtom, FaGem, FaNpm, FaMagento, FaUsers, FaFulcrum } from "react-icons/fa";

export default class MainView extends React.Component {
  render() {
    return (
<div>
      <Alert color="info" outline p="1" className="text-center">
      <h4>R[3]ACTOR</h4>
    </Alert>
    <Container className="text-center">
        <br />
        <Row> 
        <Col xs="12" sm="12" className="text-center">
     
            
            
           <img src={Logo} className="img-rounded m-0" /> <br /><br />
          
        </Col>
        </Row>
        <br />
        <Row>       
        <Col xs="6" sm="3" lg="3">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary " >
        <CardTitle><h3><FaUikit /></h3></CardTitle>
          <CardTitle>Components</CardTitle>
          <CardText>Component Lib.</CardText>
          <Button className="shadow rounded" color="primary" >Go</Button>
        </Card>
      </Col>
      <Col xs="6" sm="3" lg="3" >
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary">      
        <CardTitle><h3><FaExpand /></h3></CardTitle>
          <CardTitle>Views</CardTitle>
          <CardText>Views Lib.</CardText>
          <Button className="shadow rounded" color="success">Go</Button>
        </Card>
      </Col>
            
        <Col xs="6" sm="3" lg="3">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary">
        <CardTitle><h3><FaAtom /></h3></CardTitle>
          <CardTitle>Widgets</CardTitle>
          <CardText>Widget Lib.</CardText>
          <Button className="shadow rounded" color="danger">Go</Button>
        </Card>
      </Col>
      <Col xs="6" sm="3" lg="3">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary">    
        <CardTitle><h3><FaGem /></h3></CardTitle>
          <CardTitle>Exclusive</CardTitle>
          <CardText>X Lib.</CardText>
          <Button className="shadow rounded" color="warning">Go</Button>
        </Card>
      </Col>
        </Row>






        <br />




        <Row>       
        <Col xs="6" sm="3" lg="3">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary" >
        <CardTitle><h3><FaNpm /></h3></CardTitle>
          <CardTitle>NPMS</CardTitle>
          <CardText>Depedancies</CardText>
          <Button className="shadow rounded" color="dark" outline >Go</Button>
        </Card>
      </Col>
      <Col xs="6" sm="3" lg="3" >
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary">      
        <CardTitle><h3><FaMagento /></h3></CardTitle>
          <CardTitle>Cool Stuff</CardTitle>
          <CardText>Reactor Feed</CardText>
          <Button className="shadow rounded" color="dark" outline>Go</Button>
        </Card>
      </Col>          
        <Col xs="6" sm="3" lg="3">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary">
        <CardTitle><h3><FaUsers /></h3></CardTitle>
          <CardTitle>Forums</CardTitle>
          <CardText>Forums Lib.</CardText>
          <Button className="shadow rounded" color="dark" outline>Go</Button>
        </Card>
      </Col>
      <Col xs="6" sm="3" lg="3">
        <Card body className="shadow-lg p-3 mb-5 bg-white rounded border-secondary">    
        <CardTitle><h3><FaFulcrum/></h3></CardTitle>
          <CardTitle>Hall Of Fame</CardTitle>
          <CardText>HOF Lib.</CardText>
          <Button className="shadow rounded" color="dark" outline>Go</Button>
        </Card>
      </Col>
        </Row>
        <Button className="shadow rounded" color="info">Whats Reactor ???</Button>
      </Container>
     </div>

        );
    }
}