import React, { useState, useContext } from 'react';
import { Card, Button, Spinner, Image } from 'react-bootstrap';

import QuoteContext from '../../context';

// Import local component styles
import quoteListStyles from './quoteList.module.scss';
const { quoteCard } = quoteListStyles;

const QuoteList = () => {
  const { quotes, getQuotes } = useContext(QuoteContext);
  const [loading, setLoading] = useState(false);

  const handleGetQuotes = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      getQuotes();
    }, 1000);
  };

  return (
    <section>
      {/* Header */}
      <div className='d-flex align-items-center justify-content-center'>
        {/* Listt Quotes Btn */}
        <Button
          className='text-capitalize mr-4'
          variant='outline-primary'
          size='lg'
          onClick={() => handleGetQuotes()}>
          {quotes ? 'refresh' : 'list quotes'}
        </Button>
        {/* Spinner Loader */}
        {!quotes && loading && (
          <Spinner animation='border' role='status' variant='primary'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        )}
      </div>

      {/* Content */}
      {!quotes ? (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h4 className='my-5 text-center'>No quotes to show up</h4>
          <Image src='/assets/empty.svg' width='300' fluid />
        </div>
      ) : (
        quotes.map(quote => (
          <Card className={`${quoteCard}`} key={quote.id}>
            <Card.Body>
              <Card.Text>{quote.body}</Card.Text>
              <Card.Subtitle className='mb-2 text-muted'>
                <Card.Link
                  href={`${quote.source}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  - {quote.author}
                </Card.Link>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      )}
    </section>
  );
};

export default QuoteList;
