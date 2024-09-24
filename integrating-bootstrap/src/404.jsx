import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Matrix from './Matrix.jpg';
import { NavLink } from 'react-bootstrap';


const NotFound = () => {
  return (
    <Container className="bg-light">
      <Row>
        <Col>
            <Image src={Matrix}/>
        </Col>
        <Col>
          <h1 className="text-danger">Page Not Found</h1>
          <p className="text-secondary">
            Page Not Found, It Broke.
          </p>
          <NavLink to="/" className="btn-primary">Go To Homepage</NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
