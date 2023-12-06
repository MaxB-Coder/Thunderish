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

  // const getData = useCallback(() => {
  const getPlace = async (searchText) => {
    try {
      let placeData;
      if (searchText === '') {
        placeData = await getPlaceData('New York');
      } else {
        // placeData = await getPlaceData(searchText);
      }
      console.log(placeData);
    } catch (e) {
      console.error(e);
      setPlaceData({});
    }
  };

  const getWeather = async () => {
    try {
      const data = await getWeatherData(
        placeData?.parsedData?.lat,
        placeData?.parsedData?.lon,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      setWeatherData(data);
    } catch (e) {
      console.error(e);
      setWeatherData({});
    }
  };
  // }, [placeData]);

  useEffect(() => {
    // const getPlace = async (searchText) => {
    //   try {
    //     let placeData;
    //     if (searchText === '') {
    //       placeData = await getPlaceData('New York');
    //     } else {
    //       // placeData = await getPlaceData(searchText);
    //     }
    //     console.log(placeData);
    //   } catch (e) {
    //     console.error(e);
    //     setPlaceData({});
    //   }
    // };

    // const getWeather = async () => {
    //   try {
    //     const data = await getWeatherData(
    //       placeData?.parsedData?.lat,
    //       placeData?.parsedData?.lon,
    //       Intl.DateTimeFormat().resolvedOptions().timeZone
    //     );
    //     setWeatherData(data);
    //   } catch (e) {
    //     console.error(e);
    //     setWeatherData({});
    //   }
    // };
    console.log(`Search:${searchText}`);
    console.log(`Place data:`);
    console.log(placeData);
    console.log(`Weather data:`);
    console.log(weatherData);
    // getData();
  }, [searchText, placeData, weatherData, getWeather]);

  return (
    <>
      <Header
        weatherData={weatherData}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Footer weatherData={weatherData} placeName={placeData.parsedData} />
    </>
  );
}

export default App;
