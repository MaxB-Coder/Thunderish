import { useCallback, useEffect, useState } from 'react';
import '../public/Thunderish.png';
import './App.css';

import { getWeather } from "./utils/WeatherDataService.js"
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';


function App() {

  const [weatherData, setWeatherData] = useState({});

  const getData = async() => {
    try {
      const data = await getWeather(41, 74, Intl.DateTimeFormat().resolvedOptions().timeZone)
      setWeatherData(data);
      console.log(data);
    } catch(e) {
      console.error(e);
      setWeatherData({});
    }
  }

  // const [currentWeatherData, setCurrentWeather] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header weatherData={weatherData}/>
      <Footer weatherData={weatherData}/>
    </>
  )
}

export default App
