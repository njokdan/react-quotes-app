import React, { useState, useContext } from 'react';
import { Card, Form, Button, Alert, Spinner } from 'react-bootstrap';

import QuoteContext from '../context';

const CreateQuote = () => {
  // Context state and functions
  const { createQuote, loading, setLoading } = useContext(QuoteContext);

  // Local state
  const [alert, setAlert] = useState({
    message: '',
    type: ''
  });

  const [formData, setFormData] = useState({
    author: '',
    body: '',
    source: ''
  });
  const { author, body, source } = formData;

  // Handle form submit
  const handleFormSubmit = async event => {
    event.preventDefault();
    setLoading(true);

    const response = await createQuote(formData);

    setFormData({ author: '', body: '', source: '' });
    setLoading(false);
    handleSetAlert(response);
  };

  // Handle set and clear alert state
  const handleSetAlert = response => {
    if (!response) {
      setAlert({
        message: 'An error has occurred!',
        type: 'danger'
      });
      clearAlert();
    } else {
      setAlert({
        message: 'Quote created successfully!',
        type: 'success'
      });
      clearAlert();
    }
  };
  const clearAlert = () => {
    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 3000);
  };

  // Set input values to local state on input change
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

            {/* Spinner */}
            {loading ? (
              <Button
                variant='primary'
                className='text-capitalize'
                size='md'
                block
                disabled>
                <Spinner
                  as='span'
                  animation='grow'
                  size='sm'
                  role='status'
                  aria-hidden='true'
                />
                Loading...
              </Button>
            ) : (
              <Button
                type='submit'
                className='text-capitalize'
                variant='primary'
                size='md'
                block>
                Create
              </Button>
            )}

            {alert.message && alert.type && (
              <Alert
                className='my-4 text-center text-capitalize'
                variant={alert.type}>
                {alert.message}
              </Alert>
            )}
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CreateQuote;
