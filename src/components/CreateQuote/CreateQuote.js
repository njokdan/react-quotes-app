import React, { useState, useContext } from 'react';
import { Card, Form, Button, Alert, Spinner } from 'react-bootstrap';

import useForm from 'react-hook-form';
import QuoteContext from '../../context';

// Import component styles
import createQuoteStyles from './createQuote.module.scss';
const { formStyle } = createQuoteStyles;

const CreateQuote = () => {
  // Context API
  const { createQuote } = useContext(QuoteContext);

  // Local State
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    message: '',
    type: '',
    show: false
  });

  // Handle form submitting
  const { register, handleSubmit, errors } = useForm();

  const handleFormSubmit = async (data, e) => {
    e.target.reset(); // standard reset after form submit
    setLoading(true); // show loading spinner
    const response = await createQuote(data); // wait until a Quote is created
    handleSetAlert(response); // show alert based on the request response
  };

  // Set alert message
  const handleSetAlert = response => {
    if (!response) {
      setAlert({
        message: 'An error has occurred!',
        type: 'danger',
        show: true
      });
      setLoading(false);
    } else {
      setAlert({
        message: 'Quote created successfully!',
        type: 'success',
        show: true
      });
      setLoading(false);
    }
  };

  // Close alert message
  const handleCloseAlert = () => setAlert({ ...alert, show: false });

  return (
    <section>
      <Card className='border-0 shadow'>
        <Card.Body>
          {/* Alert */}
          <Alert
            className='mb-4'
            dismissible
            show={alert.show}
            variant={alert.type || ''}
            onClose={() => handleCloseAlert()}>
            {alert.message || ''}
          </Alert>

          {/* Title */}
          <h2 className='text-capitalize m-0 mb-3'>create a quote</h2>

          {/* Form */}
          <Form
            className={`${formStyle}`}
            onSubmit={handleSubmit(handleFormSubmit)}>
            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type='text'
                placeholder='John Doe'
                name='author'
                ref={register({ required: true })}
              />
              {errors.author && errors.author.type === 'required' && (
                <p className='form-validation-label'>
                  Please provide an author
                </p>
              )}
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Body</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                placeholder='Write or paste here some interesting text'
                name='body'
                ref={register({ required: true })}
              />
              {errors.body && errors.body.type === 'required' && (
                <p className='form-validation-label'>Please provide a quote</p>
              )}
            </Form.Group>

            <Form.Group controlId='exampleForm.ControlInput1'>
              <Form.Label>Source</Form.Label>
              <Form.Control
                type='text'
                placeholder='http://[yoursource].com'
                name='source'
                ref={register({ required: true })}
              />
              {errors.source && errors.source.type === 'required' && (
                <p className='form-validation-label'>Please provide a source</p>
              )}
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
          </Form>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CreateQuote;
