import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Button } from 'react-bootstrap';

import useForm from 'react-hook-form';
import QuoteContext from '../../context';

const EditQuote = ({ quote, setEditing }) => {
  // Context API
  const { editQuote, deleteQuote } = useContext(QuoteContext);

  // // Handle form submitting and edit selected quote
  const { register, handleSubmit } = useForm();

  const handleUpdateQuote = async data => {
    const { id } = data; // get quote id
    delete data.id; // separate data from id
    await editQuote(data, id); // wait until a Quote is updated
    setEditing({ id: '' }); // clear editing mode
  };

  // Delete a quote by id
  const handleDeleteQuote = id => {
    if (window.confirm('Are you sure that you want to delete this quote?')) {
      deleteQuote(id);
    }
  };

  return (
    <Form id="edit-quote" onSubmit={handleSubmit(handleUpdateQuote)}>
      <Form.Control
        type="hidden"
        name="id"
        defaultValue={quote.id}
        ref={register({ required: false })}
      />
      <Form.Row>
        <Col className="mb-3">
          <Form.Control
            as="textarea"
            rows="2"
            name="body"
            defaultValue={quote.body}
            ref={register({ required: false })}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col className="mb-3">
          <Form.Control
            type="text"
            name="author"
            defaultValue={quote.author}
            ref={register({ required: false })}
          />
        </Col>
        <Col className="mb-3">
          <Form.Control
            type="text"
            name="source"
            defaultValue={quote.source}
            ref={register({ required: false })}
          />
        </Col>
      </Form.Row>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div>
          <Button
            id="remove-quote"
            className="mr-2"
            size="sm"
            variant="danger"
            onClick={() => handleDeleteQuote(quote.id)}
          >
            <i className="fas fa-trash-alt" />
          </Button>
          <Button size="sm" type="submit" variant="warning">
            Update
          </Button>
        </div>
        <Button size="md" type="submit" variant="link">
          Go back
        </Button>
      </div>
    </Form>
  );
};

EditQuote.propTypes = {
  quote: PropTypes.object.isRequired,
  setEditing: PropTypes.func.isRequired,
};

export default EditQuote;
