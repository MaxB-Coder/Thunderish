import { ICON_MAP } from '../utils/iconMap.js';

export const CurrentDay = ({ weatherData, placeData }) => {
  const current = weatherData?.current;
  const placeName = placeData?.parsedData?.city;

  function getIcon(iconCode) {
    return `icons/${ICON_MAP.get(iconCode)}.svg`;
  }

  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long' });

  return (
    <div className='currentDay'>
      <h2 className='searchName'>
        {placeData?.parsedData?.city ? placeName : 'Searching...'}
      </h2>
      <div className='currentIconAndTemp'>
        <img
          className='conditionToday'
          src={getIcon(placeData?.parsedData?.city ? current?.iconCode : 0)}
          alt='weather condition'
        />
        <h1 className='searchTemp'>
          {placeData?.parsedData?.city ? Math.round(current?.currentTemp) : '-'}
          &deg;C
        </h1>
      </div>
    </div>
  );
};
