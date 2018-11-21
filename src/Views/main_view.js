import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import Logo from './logo.jpg';
import View from './view.png';
export default class MainView extends React.Component {
  render() {
    return (


    <Container className="text-center">
        <Row>
          <Col>
          <CardDeck>
      <Card>
        <CardImg top width="100%" src={Logo} alt="Card image cap" className="img-thumbnail img-sm" />
        <CardBody>
          <CardTitle>Components</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={View} alt="Card image cap" />
        <CardBody>
          <CardTitle>Views</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Reactor Widgets</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
      </Container>
     

        );
    }
}