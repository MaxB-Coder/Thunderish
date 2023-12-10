import { useState } from 'react';

export const Header = ({ weatherData, searchText, setSearchText }) => {
  const [inputText, setInputText] = useState('');

  function handleSubmit(e) {
    console.log(e.target.firstElementChild.value);
    setSearchText(inputText);
    e.preventDefault();
  }
  return (
    <div className='header'>
      <form onSubmit={handleSubmit} className='search'>
        <input
          id='searchBox'
          className='searchBox'
          placeholder='Location...'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <button
          type='submit'
          id='searchSubmit'
          className='searchSubmit'
          value='search'
        ></button>
      </form>
    </div>
  );
};
