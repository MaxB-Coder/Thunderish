import '../public/Thunderish.png';
import './App.css';

import { Header } from './components/Header.jsx';

function App() {
  return (
    <>
    <Header />
    <div className="main">
      <form action="">
        <input className='search' placeholder='Location...'></input>
        <input className='searchSubmit' type="submit" value="Search" formAction='url'/>
      </form>
      <h2 className='searchName'>New York</h2>
      <a href=""><img src="https://media.cntraveler.com/photos/63483e15ef943eff59de603a/master/pass/New%20York%20City_GettyImages-1347979016.jpg" alt="New York" className="searchImage" /></a>
    </div>
    </>
  )
}

export default App
