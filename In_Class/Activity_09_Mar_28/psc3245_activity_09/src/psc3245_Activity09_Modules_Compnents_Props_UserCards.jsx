/*
Author: Peter Collins
ISU Netid : psc3245@iastate.edu
Date : March 28th, 2025
*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Col, Button } from 'react-bootstrap';

function UserCard(props) {
  return (
    <Container>
      <Col>
        <Card>
          <Card.Img variant="top" src={props.picture} />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              Salary: {props.salary}<br/>
              Status: {props.status.toString()}<br/>
              Address: {props.address.street}, {props.address.city}, {props.address.state}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}

export { UserCard };