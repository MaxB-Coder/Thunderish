import PropTypes from 'prop-types';
import { ICON_MAP } from '../utils/iconMap.js';

export const CurrentDay = ({ weatherData, placeData }) => {
  const current = weatherData?.current;
  const placeName = placeData?.parsedData?.city;

  function getIcon(iconCode) {
    return `icons/${ICON_MAP.get(iconCode)}.svg`;
  }

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
          {placeData?.parsedData?.city ? Math.round(current?.currentTemp) : '0'}
          &deg;C
        </h1>
      </div>
    </div>
  );
};

CurrentDay.propTypes = {
  weatherData: PropTypes.shape({
    current: PropTypes.shape({
      iconCode: PropTypes.number.isRequired,
      currentTemp: PropTypes.number.isRequired,
    }),
  }),
  placeData: PropTypes.shape({
    parsedData: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  }),
};
