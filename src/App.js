import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';

import { QuoteProvider } from './context';

function App() {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    if (quotes) {
      getQuotes();
    }
  });

  // GET:::quotes
  const getQuotes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/quotes');
      setQuotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // CREATE:::quote
  const createQuote = async formData => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await axios.post('http://localhost:3001/quotes', formData, config);
      getQuotes();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT:::quote

  // DELETE:::quote

  return (
    <QuoteProvider value={{ quotes, getQuotes, createQuote }}>
      <Dashboard />
    </QuoteProvider>
  );
}

export default App;
