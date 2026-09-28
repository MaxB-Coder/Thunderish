import PropTypes from 'prop-types';
import { ICON_MAP } from '../utils/iconMap.js';

const getIcon = (iconCode) => `icons/${ICON_MAP.get(iconCode)}.svg`;
const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'long' });

/** The next four days (today is the big number above). */
export const Footer = ({ weatherData }) => (
  <div className='footer'>
    <ul className='fiveDayForecast'>
      {weatherData.daily.slice(1, 5).map((day) => (
        <li className='forecastDay' key={day.timestamp}>
          {DAY_FORMATTER.format(day.timestamp)}
          <br />
          <br />
          <img className='forecastDayIcon' src={getIcon(day.iconCode)} alt='weather condition' />
          <br />
          <br />
          {day.forecastTemp}&deg;C
        </li>
      ))}
    </ul>
  </div>
);

Footer.propTypes = {
  weatherData: PropTypes.shape({
    daily: PropTypes.arrayOf(
      PropTypes.shape({
        timestamp: PropTypes.number.isRequired,
        iconCode: PropTypes.number.isRequired,
        forecastTemp: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
