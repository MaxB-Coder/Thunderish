export const Header = ({
  weatherData,
  inputRef,
  searchText,
  setSearchText,
}) => {
  return (
    <div className='header'>
      <form action='' className='search'>
        <input
          id='searchBox'
          className='searchBox'
          placeholder='Location...'
          ref={inputRef}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <input
          className='searchSubmit'
          type='submit'
          value='Search'
          formAction='url'
        />
      </form>
    </div>
  );
};
