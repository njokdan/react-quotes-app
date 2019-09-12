import React from 'react';
import ListQuotes from './components/ListQuotes';
import CreateQuote from './components/CreateQuote';

function CCNQuotes() {
  return (
    <>
      <h1>React Quotes App</h1>
      <CreateQuote />
      <br />
      <br />
      <ListQuotes />
    </>
  );
}

export default CCNQuotes;
