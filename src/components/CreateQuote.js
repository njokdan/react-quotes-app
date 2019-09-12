import React, { useState } from 'react';

const CreateQupte = () => {
  const [formData, setFormData] = useState({
    author: '',
    body: '',
    source: ''
  });
  const { author, body, source } = formData;

  // Handle on form submit
  const onFormSubmit = event => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  // Handle on input change
  const onInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section>
      <h2>Crear Quote</h2>
      <form onSubmit={e => onFormSubmit(e)}>
        <input
          type='text'
          placeholder='Author'
          name='author'
          value={author}
          onChange={e => onInputChange(e)}
        />
        <textarea
          cols='30'
          rows='10'
          name='body'
          placeholder='Body'
          value={body}
          onChange={e => onInputChange(e)}></textarea>
        <input
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

export default CreateQupte;
