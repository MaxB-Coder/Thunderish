import { useRef, useEffect, useState, useCallback } from 'react';
import '../public/Thunderish.png';
import './App.css';

import { getWeatherData } from './utils/weatherDataService.js';
import { getPlaceData } from './utils/placesDataService.js';
import { getPlaceImageData } from './utils/placesDataService.js';
import { Header } from './components/Header.jsx';
import { CurrentDay } from './components/CurrentDay.jsx';
import { Footer } from './components/Footer.jsx';

// import './backgrounds/cloud-bolt.jpg';
// import './backgrounds/cloud-showers-heavy.jpg';
// import './backgrounds/cloud-sun.jpg';
// import './backgrounds/cloud.jpg';
// import './backgrounds/smog.jpg';
// import './backgrounds/snow.jpg';

import { BACKGROUND_MAP } from './utils/backgroundMap.js';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [placeData, setPlaceData] = useState({});
  const [placeImageData, setPlaceImageData] = useState({});
  const [searchText, setSearchText] = useState('');

  const getData = async () => {
    try {
      let placeData;
      let placeImageData;
      if (searchText === '') {
        placeData = await getPlaceData('New York');
      } else {
        placeData = await getPlaceData(searchText);
      }
      setPlaceData(placeData);
      console.log('Place Data:');
      console.log(placeData);
      if (searchText === '') {
        placeImageData = await getPlaceImageData(
          '51d9d1938d628052c0595938a4ac3a5b4440f00101f90121af020000000000c00208'
        );
      } else {
        placeImageData = await getPlaceImageData(placeData.parsedData.place_id);
      }
      setPlaceImageData(placeImageData);
      console.log('Place Image Data:');
      console.log(placeImageData);
      const wData = await getWeatherData(
        placeData?.parsedData?.lat,
        placeData?.parsedData?.lon,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      setWeatherData(wData);
      console.log('Weather Data:');
      console.log(wData);
    } catch (e) {
      console.error(e);
      setPlaceData({});
      setWeatherData({});
    }
  };

  useEffect(() => {
    getData();
  }, [searchText]);

  function getBackground(iconCode) {
    return `backgrounds/${BACKGROUND_MAP.get(iconCode)}.jpg`;
  }

  return (
    <>
      <div id='gradient'>
        <body
          id='background'
          className='body'
          style={{
            backgroundImage: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.1)
            ), url(${
              placeData?.parsedData?.city
                ? getBackground(weatherData?.current?.iconCode)
                : 'https://i.pinimg.com/originals/c8/a1/39/c8a13970d0a773fb8b14746669a1a570.gif'
            })`,
          }}
        >
          <Header
            weatherData={weatherData}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <CurrentDay weatherData={weatherData} placeData={placeData} />
          <Footer weatherData={weatherData} placeData={placeData} />
        </body>
      </div>
    </>
  );
}

export default App;
