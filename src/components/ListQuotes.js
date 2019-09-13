import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const ListQuotes = () => {
  const [quotes, setQuotes] = useState(null);

  const handleGetQuotes = async () => {
    // Fetch all quotes and save it to local state
    try {
      const response = await axios.get('http://localhost:3001/quotes');
      setQuotes([...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <Button
        variant='outline-primary'
        size='lg'
        onClick={() => handleGetQuotes()}>
        Get Quotes
      </Button>
      {!quotes
        ? ''
        : quotes.map(quote => (
            <Card
              className='my-4 shadow-sm border-0 border-bottom'
              key={quote.id}>
              <Card.Body>
                <Card.Text>{quote.body}</Card.Text>
                <Card.Subtitle className='mb-2 text-muted'>
                  - {quote.author}
                </Card.Subtitle>
                <Card.Link
                  href={`${quote.source}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {quote.source}
                </Card.Link>
              </Card.Body>
            </Card>
          ))}
    </section>
  );
};

export default ListQuotes;
