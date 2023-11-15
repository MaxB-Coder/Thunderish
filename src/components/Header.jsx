import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className="header">
      <form action="" className='search'>
        <input className='searchBox' placeholder='Location...'></input>
        <input className='searchSubmit' type="submit" value="Search" formAction='url'/>
      </form>
    </div>
  )
}
