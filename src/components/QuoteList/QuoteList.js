import React, { useState, useContext } from 'react';
import { Card, Button, Spinner, Image } from 'react-bootstrap';

import QuoteContext from '../../context';

// Import component styles
import quoteListStyles from './quoteList.module.scss';
const { quoteCard } = quoteListStyles;

const QuoteList = () => {
  // Context API
  const { quotes, getQuotes, deleteQuote } = useContext(QuoteContext);

  // Local State
  const [loading, setLoading] = useState(false);

  // Get list of quotes
  const handleGetQuotes = async () => {
    setLoading(true);
    await getQuotes();
    setLoading(false);
  };

  // Delete a quote by id
  const handleDeleteQuote = id => {
    if (window.confirm('Are you sure that you want to delete this quote?')) {
      deleteQuote(id);
    }
  };

  return (
    <section>
      {/* Header */}
      {!quotes ? (
        <>
          <div className='d-flex align-items-center justify-content-center'>
            <Button
              className='text-capitalize mr-4'
              variant='outline-primary'
              size='lg'
              onClick={() => handleGetQuotes()}>
              List quotes
            </Button>
            {loading && (
              <Spinner animation='border' role='status' variant='primary'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            )}
          </div>

          <div className='d-flex flex-column justify-content-center align-items-center'>
            <h4 className='my-5 text-center'>No quotes to show up</h4>
            <Image src='/assets/empty.svg' width='300' fluid />
          </div>
        </>
      ) : (
        // Content
        quotes.map(quote => (
          <Card className={`${quoteCard}`} key={quote.id}>
            <Card.Body>
              <Card.Text>“{quote.body}”</Card.Text>
              <Card.Subtitle className='d-flex align-items-center justify-content-between mb-2 text-muted'>
                <Card.Link
                  href={`${quote.source}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  - {quote.author}
                </Card.Link>
                <Button
                  size='sm'
                  variant='danger'
                  onClick={() => handleDeleteQuote(quote.id)}>
                  <i className='fas fa-trash-alt'></i>
                </Button>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      )}
    </section>
  );
};

export default QuoteList;
