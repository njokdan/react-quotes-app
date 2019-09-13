import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Title = () => (
  <Row>
    <Col xs='12'>
      <section className='p-5'>
        <h1 className='display-4 text-center font-weight-bold m-0'>
          ReactJS Quotes App
        </h1>
      </section>
    </Col>
  </Row>
);

export default Title;
