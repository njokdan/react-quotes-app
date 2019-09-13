import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './components/Title';
import QuoteList from './components/QuoteList/QuoteList';
import CreateQuote from './components/CreateQuote';

function CCNQuotes() {
  return (
    <>
      <Container>
        <Title />
        <Row>
          <Col xs='12' lg='4'>
            <CreateQuote />
          </Col>
          <Col xs='12' lg='8'>
            <QuoteList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CCNQuotes;
