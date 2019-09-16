import React, { useState, useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

import QuoteContext from '../context';

const CreateQuote = () => {
  const { createQuote } = useContext(QuoteContext);
  const [formData, setFormData] = useState({
    author: '',
    body: '',
    source: ''
  });
  const { author, body, source } = formData;

  // Handle form submit for creating a Quote
  const handleFormSubmit = event => {
    event.preventDefault();
    createQuote(formData);
    setFormData({ author: '', body: '', source: '' });
  };

  // Set input values on state
  const onInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section>
      <Card className='border-0 shadow'>
        <Card.Body>
          <h2 className='text-capitalize m-0 mb-3'>create a quote</h2>
          <Form onSubmit={e => handleFormSubmit(e)}>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='John Doe'
                name='author'
                value={author}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Body</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                placeholder='Write or paste here some interesting text'
                name='body'
                value={body}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>

            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Source</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='http://[yoursource].com'
                name='source'
                value={source}
                onChange={e => onInputChange(e)}
              />
            </Form.Group>
            <Button
              type='submit'
              className='text-capitalize'
              variant='primary'
              size='md'
              block>
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CreateQuote;
