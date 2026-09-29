import PropTypes from 'prop-types';
import { CITIES } from '../utils/cities.js';


export const Welcome = ({ onPick }) => (
  <section className='welcome' aria-labelledby='welcome-title'>
    <h1 id='welcome-title' className='welcomeTitle'>
      Thunderish
    </h1>
    <p className='welcomePitch'>Today&apos;s weather and the next four days, anywhere. Search for a place, or try one:</p>
    <ul className='welcomeCities'>
      {CITIES.map(({ label, query }) => (
        <li key={label}>
          <button type='button' className='welcomeCity' onClick={() => onPick(query)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  </section>
);

Welcome.propTypes = {
  onPick: PropTypes.func.isRequired,
};
