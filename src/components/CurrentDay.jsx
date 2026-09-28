import PropTypes from 'prop-types';
import { ICON_MAP, conditionName } from '../utils/iconMap.js';

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
    <section className='currentDay' aria-labelledby='place-name'>
      <h2 id='place-name' className='searchName'>
        {placeName}
      </h2>
      <div className='currentIconAndTemp'>
        {/* The condition is written out below, so the icon is decoration */}
        <img className='conditionToday' src={getIcon(current.iconCode)} alt='' />
        <p className='searchTemp'>{Math.round(current.currentTemp)}&deg;</p>
      </div>
      <p className='conditionName'>{conditionName(current.iconCode)}</p>
    </section>
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
