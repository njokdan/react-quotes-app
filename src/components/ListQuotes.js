import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  // Get all quotes and save in to local state
  useEffect(() => {
    async function getQuotes() {
      try {
        const response = await axios.get('http://localhost:3001/quotes');
        setQuotes([...response.data]);
      } catch (error) {
        console.error(error);
      }
    }
    getQuotes();
  }, []);

  return (
    <div>
      <h2>List All Quotes</h2>
      <ul>
        {quotes.map(quote => (
          <li key={quote.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListQuotes;
