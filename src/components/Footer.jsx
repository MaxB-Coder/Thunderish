import PropTypes from 'prop-types';
import { ICON_MAP } from '../utils/iconMap.js';

export const Footer = ({ weatherData, placeData }) => {
  const daily = weatherData?.daily;

  function getIcon(iconCode) {
    return `icons/${ICON_MAP.get(iconCode)}.svg`;
  }

  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long' });

  return (
    <div className='footer'>
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

Footer.propTypes = {
  weatherData: PropTypes.shape({
    daily: PropTypes.arrayOf(
      PropTypes.shape({
        timestamp: PropTypes.number.isRequired,
        iconCode: PropTypes.number.isRequired,
        forecastTemp: PropTypes.number.isRequired,
      })
    ),
  }),
  placeData: PropTypes.shape({
    parsedData: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  }),
};
