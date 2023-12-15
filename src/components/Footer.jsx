import { ICON_MAP } from '../utils/iconMap.js';

export const Footer = ({ weatherData, placeData }) => {
  const current = weatherData?.current;
  const daily = weatherData?.daily;
  const placeName = placeData?.parsedData?.city;

  function getIcon(iconCode) {
    return `icons/${ICON_MAP.get(iconCode)}.svg`;
  }

  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long' });

  return (
    <div className='footer'>
      {/* <div className='today'>
        <div className='currentTemp'>
          <img
            className='conditionToday'
            src={placeData?.parsedData?.city ? getIcon(current?.iconCode) : 0}
            alt='weather condition'
          />
          <h2 className='searchName'>
            {placeData?.parsedData?.city ? placeName : 'Searching...'}
          </h2>
          <h1 className='searchTemp'>
            {placeData?.parsedData?.city
              ? Math.round(current?.currentTemp)
              : '-'}
            &deg;C
          </h1>
        </div>
      </div> */}
      <ul className='fiveDayForecast'>
        <li className='forecastDay'>
          {DAY_FORMATTER.format(daily?.[1]?.timestamp)}
          <br />
          <br />
          <img
            className='forecastDayIcon'
            src={getIcon(
              placeData?.parsedData?.city ? daily?.[1]?.iconCode : 0
            )}
            alt='weather condition'
          />
          <br />
          <br />
          {placeData?.parsedData?.city ? daily?.[1]?.forecastTemp : '-'}&deg;C
        </li>
        <li className='forecastDay'>
          {DAY_FORMATTER.format(daily?.[2]?.timestamp)}
          <br />
          <br />
          <img
            className='forecastDayIcon'
            src={getIcon(
              placeData?.parsedData?.city ? daily?.[2]?.iconCode : 0
            )}
            alt='weather condition'
          />
          <br />
          <br />
          {placeData?.parsedData?.city ? daily?.[2]?.forecastTemp : '-'}&deg;C
        </li>
        <li className='forecastDay'>
          {DAY_FORMATTER.format(daily?.[3]?.timestamp)}
          <br />
          <br />
          <img
            className='forecastDayIcon'
            src={getIcon(
              placeData?.parsedData?.city ? daily?.[3]?.iconCode : 0
            )}
            alt='weather condition'
          />
          <br />
          <br />
          {placeData?.parsedData?.city ? daily?.[3]?.forecastTemp : '-'}&deg;C
        </li>
        <li className='forecastDay'>
          {DAY_FORMATTER.format(daily?.[4]?.timestamp)}
          <br />
          <br />
          <img
            className='forecastDayIcon'
            src={getIcon(
              placeData?.parsedData?.city ? daily?.[4]?.iconCode : 0
            )}
            alt='weather condition'
          />
          <br />
          <br />
          {placeData?.parsedData?.city ? daily?.[4]?.forecastTemp : '-'}&deg;C
        </li>
      </ul>
    </div>
  );
};
