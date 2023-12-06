export const Header = ({ weatherData, searchText, setSearchText }) => {
  return (
    <div className='header'>
      <form action='' className='search'>
        <input
          id='searchBox'
          className='searchBox'
          placeholder='Location...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <input
          className='searchSubmit'
          type='submit'
          value='Search'
          formAction={setSearchText(searchText)}
        />
      </form>
    </div>
  );
};
