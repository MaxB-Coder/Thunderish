import PropTypes from 'prop-types';
import { useState } from 'react';

export const Header = ({ setSearchText }) => {
  const [inputText, setInputText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSearchText(inputText.trim());
  }

  return (
    <header className='header'>
      <form onSubmit={handleSubmit} className='search' role='search'>
        <input
          type='search'
          className='searchBox'
          aria-label='Search for a place'
          placeholder='Search for a place'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type='submit' className='searchSubmit' aria-label='Search'>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <circle cx='11' cy='11' r='7' />
            <path d='m20 20-3.5-3.5' />
          </svg>
        </button>
      </form>
    </header>
  );
};

Header.propTypes = {
  setSearchText: PropTypes.func.isRequired,
};
