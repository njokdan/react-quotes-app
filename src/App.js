import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard';

import { QuoteProvider } from './context';

function App() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!!quotes) {
  //     getQuotes();
  //   }
  // }, []);

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
  const deleteQuote = async id => {
    try {
      await axios.delete(`http://localhost:3001/quotes/${id}`);
      getQuotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuoteProvider
      value={{
        quotes,
        getQuotes,
        createQuote,
        deleteQuote,
        loading,
        setLoading
      }}>
      <Dashboard />
    </QuoteProvider>
  );
}

export default App;
