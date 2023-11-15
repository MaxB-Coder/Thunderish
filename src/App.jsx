import '../public/Thunderish.png';
import './App.css';

import { Header } from './components/Header.jsx';

function App() {
  return (
    <>
    <div style={{ 
  backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(https://media.cntraveler.com/photos/63483e15ef943eff59de603a/master/pass/New%20York%20City_GettyImages-1347979016.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100vw',
  height: '100vh',
  margin:'auto'
}}>
      <Header />
    </div>
    </>
  )
}

export default App
