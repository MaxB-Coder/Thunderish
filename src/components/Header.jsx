import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className="header">
      <a href="/"><FontAwesomeIcon className='home' icon={faHome} /></a>
      <img src="../public/Thunderish.png" alt="Thunderish Logo" className='logo' />
    </div>
  )
}
