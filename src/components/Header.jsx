import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className="main">
    <h2 className='searchName'>New York</h2>
      <form action="" className='search'>
        <input className='searchBox' placeholder='Location...'></input>
        <input className='searchSubmit' type="submit" value="Search" formAction='url'/>
      </form>
      {/* <img src="../public/Thunderish.png" alt="Thunderish Logo" className='logo' /> */}
    </div>
  )
}
