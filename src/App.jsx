import { useRef, useEffect, useState, useCallback } from 'react';
import '../public/Thunderish.png';
import './App.css';

import { getWeatherData } from './utils/weatherDataService.js';
import { getPlaceData } from './utils/placesDataService.js';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [placeData, setPlaceData] = useState({});
  const [searchText, setSearchText] = useState('');

  const getData = async () => {
    try {
      let placeData;
      if (searchText === '') {
        placeData = await getPlaceData('New York');
      } else {
        placeData = await getPlaceData(searchText);
      }
      const wData = await getWeatherData(
        placeData?.parsedData?.lat,
        placeData?.parsedData?.lon,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      console.log(wData);
      await setPlaceData(placeData);
      await setWeatherData(wData);
      console.log(placeData);
    } catch (e) {
      console.error(e);
      setPlaceData({});
      setWeatherData({});
    }
  };

  useEffect(() => {
    getData();
  }, [searchText]);

  return (
    <>
      <Header
        weatherData={weatherData}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Footer weatherData={weatherData} placeData={placeData} />
    </>
  );
}

export default App;
