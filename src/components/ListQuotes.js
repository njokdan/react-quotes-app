import React, { useState } from 'react';
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
    <div>
      <button onClick={() => handleGetQuotes()}>
        Click here to get quotes!
      </button>
      {!quotes ? (
        <p>No quotes to show up</p>
      ) : (
        quotes.map(quote => (
          <div key={quote.id}>
            <p>
              <strong>{quote.author}</strong>
            </p>
            <p>{quote.body}</p>
            <a
              href={`${quote.source}`}
              target='_blank'
              rel='noopener noreferrer'>
              {quote.source}
            </a>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default ListQuotes;
