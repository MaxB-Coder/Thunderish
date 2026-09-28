import PropTypes from 'prop-types';
import { ICON_MAP } from '../utils/iconMap.js';

const getIcon = (iconCode) => `icons/${ICON_MAP.get(iconCode)}.svg`;

export const CurrentDay = ({ status, placeName, weatherData }) => {
  if (status === 'notFound') {
    return (
      <div className='currentDay'>
        <p className='searchMessage'>Couldn&apos;t find that place. Try another search.</p>
      </div>
    );
  }
  if (status !== 'ready') {
    return (
      <div className='currentDay'>
        <p className='searchMessage' role='status'>
          Searching...
        </p>
      </div>
    );
  }
  const current = weatherData.current;
  return (
    <div className='currentDay'>
      <h2 className='searchName'>{placeName}</h2>
      <div className='currentIconAndTemp'>
        <img className='conditionToday' src={getIcon(current.iconCode)} alt='weather condition' />
        <p className='searchTemp'>{Math.round(current.currentTemp)}&deg;C</p>
      </div>
    </div>
  );
};

CurrentDay.propTypes = {
  status: PropTypes.oneOf(['loading', 'ready', 'notFound']).isRequired,
  placeName: PropTypes.string,
  weatherData: PropTypes.shape({
    current: PropTypes.shape({
      iconCode: PropTypes.number.isRequired,
      currentTemp: PropTypes.number.isRequired,
    }),
  }),
};
