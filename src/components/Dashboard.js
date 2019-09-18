import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import CreateQuote from './CreateQuote/CreateQuote';
import QuoteList from './QuoteList/QuoteList';

const Dashboard = () => {
  return (
    <div>
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
    </div>
  );
};

export default Dashboard;
