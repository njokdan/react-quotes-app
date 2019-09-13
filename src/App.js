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

  // PUT:::quote

  // DELETE:::quote

  return (
    <QuoteProvider value={{ quotes, getQuotes }}>
      <Dashboard />
    </QuoteProvider>
  );
}

export default App;
