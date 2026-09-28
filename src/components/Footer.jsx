import PropTypes from 'prop-types';
import { ICON_MAP, conditionName } from '../utils/iconMap.js';

const getIcon = (iconCode) => `icons/${ICON_MAP.get(iconCode)}.svg`;
const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: 'short' });

/** The next four days (today is the big number above). */
export const Footer = ({ weatherData }) => (
  <section className='forecast'>
    <h3 id='forecast-title' className='forecastTitle'>
      Next four days
    </h3>
    <ul className='fiveDayForecast' aria-labelledby='forecast-title'>
      {weatherData.daily.slice(1, 5).map((day) => (
        <li className='forecastDay' key={day.timestamp}>
          <span className='forecastDayName'>{DAY_FORMATTER.format(day.timestamp)}</span>
          <img className='forecastDayIcon' src={getIcon(day.iconCode)} alt={conditionName(day.iconCode)} />
          <span className='forecastTemp'>{day.forecastTemp}&deg;</span>
        </li>
      ))}
    </ul>
  </section>
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
