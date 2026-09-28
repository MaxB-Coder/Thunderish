import PropTypes from 'prop-types';

/** One-tap places for a first look. `query` is what gets searched: "New York" alone finds the state. */
export const CITIES = [
  { label: 'Glasgow', query: 'Glasgow' },
  { label: 'London', query: 'London' },
  { label: 'New York', query: 'New York City' },
  { label: 'Tokyo', query: 'Tokyo' },
];

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
