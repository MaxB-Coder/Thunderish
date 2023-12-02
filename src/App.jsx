import { useRef, useEffect, useState } from 'react';
import { APIProvider, Map, useAutocomplete } from '@vis.gl/react-google-maps';
import '../public/Thunderish.png';
import './App.css';

import { getWeather } from './utils/weatherDataService.js';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [searchText, setSearchText] = useState(``);
  const inputRef = useRef(null);

  const getData = async () => {
    try {
      const data = await getWeather(
        41,
        74,
        Intl.DateTimeFormat().resolvedOptions().timeZone
      );
      setWeatherData(data);
    } catch (e) {
      console.error(e);
      setWeatherData({});
    }
  };

  // const onPlaceChanged = (place) => {
  //   if (place) {
  //     setSearchText(place.formatted_address || place.name);
  //   }

  //   // Keep focus on input element
  //   inputRef.current && inputRef.current.focus();
  // };

  // useAutocomplete({
  //   inputField: inputRef && inputRef.current,
  //   onPlaceChanged,
  // });

  useEffect(() => {
    getData();
  }, []);

  const position = { lat: 53.54, lng: 10 };

  return (
    <>
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
        libraries={['places']}
      >
        <Header
          weatherData={weatherData}
          inputRef={inputRef}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <div style={{ height: '100vh', width: '100vh' }}>
          <Map zoom={9} center={position}></Map>
        </div>
        <Footer weatherData={weatherData} />
      </APIProvider>
    </>
  );
}

export default App;
