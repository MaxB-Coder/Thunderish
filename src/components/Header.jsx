export const Header = ({ weatherData }) => {
  return (
    <div className="header">
      <form action="" className='search'>
        <input className='searchBox' placeholder='Location...'></input>
        <input className='searchSubmit' type="submit" value="Search" formAction='url'/>
      </form>
    </div>
  )
}
