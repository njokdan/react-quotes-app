import React, { useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import EmptyQuotes from './EmptyQuotes';
import EditQuote from '../EditQuote';

import QuoteContext from '../../context';

// Import component styles
import quoteListStyles from './quoteList.module.scss';

const { quoteCard } = quoteListStyles;

const QuoteList = () => {
  // Context API
  const { quotes, getQuotes } = useContext(QuoteContext);

  // Local State
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState({ id: '' });

  // Get list of quotes
  const handleGetQuotes = async () => {
    setLoading(true);
    await getQuotes();
    setLoading(false);
  };

  return (
    <>
      {// If no quotes:
      !quotes ? (
        <EmptyQuotes handleGetQuotes={handleGetQuotes} loading={loading} />
      ) : (
        // If quotes, show list
        quotes.map(quote => {
          // If a quote is on Edit mode, show edit form
          if (editing.id === quote.id) {
            return (
              <Card className={`${quoteCard}`} key={quote.id}>
                <Card.Body>
                  <EditQuote quote={quote} setEditing={setEditing} />
                </Card.Body>
              </Card>
            );
          }
          // If a quote is not on Edit mode, show normally
          return (
            <Card className={`${quoteCard}`} key={quote.id}>
              <Card.Body>
                <Card.Text>“{quote.body}”</Card.Text>
                <Card.Subtitle className="d-flex align-items-center justify-content-between mb-2 text-muted">
                  <Card.Link
                    href={`${quote.source}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - {quote.author}
                  </Card.Link>
                  <div>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setEditing({ id: quote.id })}
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  </div>
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })
      )}
    </>
  );
};

export default QuoteList;
