import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';

// Import local component styles
import quoteListStyles from './quoteList.module.scss';
const { quoteCard } = quoteListStyles;

const QuoteList = () => {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (quotes) {
      handleGetQuotes();
    }
  }, [quotes]);

  const handleGetQuotes = async () => {
    // Fetch all quotes and save it to local state
    try {
      // show loading spinner before fecthing data
      setLoading(true);

      const response = await axios.get('http://localhost:3001/quotes');
      setQuotes([...response.data]);

      // hide loading spinner after fecthing data
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      {/* Get Quote Button */}
      <Button
        className='text-capitalize mr-4'
        variant='outline-primary'
        size='lg'
        onClick={() => handleGetQuotes()}>
        {!quotes ? 'get quotes' : 'refresh'}
      </Button>

      {/* Quote List */}
      {!quotes ? (
        loading ? (
          <Spinner animation='border' role='status' variant='primary'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : (
          ''
        )
      ) : (
        quotes
          .sort((a, b) => b - a)
          .map(quote => (
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
