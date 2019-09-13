import React, { useState } from 'react';
import axios from 'axios';

const CreateQuote = () => {
  const [formData, setFormData] = useState({
    author: '',
    body: '',
    source: ''
  });
  const { author, body, source } = formData;

  // Handle form submit for creating a Quote
  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await axios.post('http://localhost:3001/quotes', formData, config);
      setFormData({ author: '', body: '', source: '' });
    } catch (error) {
      console.log(error);
    }
  };

  // Set input values on the state
  const onInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section>
      <h2 className='text-capitalize'>Create quote</h2>
      <form onSubmit={e => handleFormSubmit(e)}>
        <input
          required
          type='text'
          placeholder='Author'
          name='author'
          value={author}
          onChange={e => onInputChange(e)}
        />
        <textarea
          required
          cols='30'
          rows='10'
          name='body'
          placeholder='Body'
          value={body}
          onChange={e => onInputChange(e)}></textarea>
        <input
          required
          type='text'
          placeholder='Source'
          name='source'
          value={source}
          onChange={e => onInputChange(e)}
        />
        <button type='submit'>Create</button>
      </form>
    </section>
  );
};

export default CreateQuote;
