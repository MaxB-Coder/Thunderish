import { useEffect, useState } from 'react';
import '../public/Thunderish.png';
import './App.css';

import { getWeatherData } from './utils/weatherDataService.js';
import { getPlaceData } from './utils/placesDataService.js';
import { Header } from './components/Header.jsx';
import { CurrentDay } from './components/CurrentDay.jsx';
import { Footer } from './components/Footer.jsx';
import { Welcome } from './components/Welcome.jsx';

import { BACKGROUND_MAP } from './utils/backgroundMap.js';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [placeName, setPlaceName] = useState('');
  const [searchText, setSearchText] = useState('');
  // welcome (nothing searched yet), loading, ready or notFound
  const [status, setStatus] = useState('welcome');

  useEffect(() => {
    if (!searchText) return;
    let current = true;
    setStatus('loading');
    (async () => {
      try {
        const place = (await getPlaceData(searchText)).parsedData;
        const weather = await getWeatherData(
          place.lat,
          place.lon,
          Intl.DateTimeFormat().resolvedOptions().timeZone
        );
        if (!current) return;
        // A search for a state or a country has no city: use its own name
        setPlaceName(place.city ?? place.name);
        setWeatherData(weather);
        setStatus('ready');
      } catch (e) {
        console.error(e);
        if (current) setStatus('notFound');
      }
    })();
    // A newer search replaces this one
    return () => {
      current = false;
    };
  }, [searchText]);

  const background =
    status === 'ready'
      ? `backgrounds/${BACKGROUND_MAP.get(weatherData?.current?.iconCode)}.jpg`
      : 'backgrounds/cloud-sun.jpg';

  return (
    <>
      <div id='gradient'>
        <div
          id='background'
          className='body'
          style={{
            backgroundImage: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.1)
            ), url(${background})`,
          }}
        >
          <Header setSearchText={setSearchText} />
          {status === 'welcome' ? (
            <Welcome onPick={setSearchText} />
          ) : (
            <CurrentDay status={status} placeName={placeName} weatherData={weatherData} />
          )}
          {status === 'ready' && <Footer weatherData={weatherData} />}
        </div>
      </div>
    </>
  );
}

export default App;
