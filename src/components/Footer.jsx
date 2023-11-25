import { ICON_MAP } from "../utils/iconMap.js";

export const Footer = ({ weatherData }) => {

  console.log(weatherData);
  const current = weatherData?.current;
  const daily = weatherData?.daily;

  function getIcon(iconCode) {
    return `icons/${ICON_MAP.get(iconCode)}.svg`
  }

  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { weekday: "long"})

  return (
    <div className="footer">
      <div className="today">
        <div className="currentTemp">
          <h2 className='searchName'>New York</h2>
          <h1>{ Math.round(current?.currentTemp) }&deg;C</h1>
        </div>
        <img className="conditionToday" src={ getIcon(current?.iconCode) } alt="weather condition" />
      </div>
      <ul className="fiveDayForecast">
        <li className='forecastDay'>{ DAY_FORMATTER.format(daily?.[1].timestamp) }<br /><br /><img className="forecastDayIcon" src={ getIcon(daily?.[1].iconCode) } alt="weather condition" /><br /><br />{ daily?.[1].forecastTemp }&deg;C</li>
        <li className='forecastDay'>{ DAY_FORMATTER.format(daily?.[2].timestamp) }<br /><br /><img className="forecastDayIcon" src={ getIcon(daily?.[2].iconCode) } alt="weather condition" /><br /><br />{ daily?.[2].forecastTemp }&deg;C</li>
        <li className='forecastDay'>{ DAY_FORMATTER.format(daily?.[3].timestamp) }<br /><br /><img className="forecastDayIcon" src={ getIcon(daily?.[3].iconCode) } alt="weather condition" /><br /><br />{ daily?.[3].forecastTemp }&deg;C</li>
        <li className='forecastDay'>{ DAY_FORMATTER.format(daily?.[4].timestamp) }<br /><br /><img className="forecastDayIcon" src={ getIcon(daily?.[4].iconCode) } alt="weather condition" /><br /><br />{ daily?.[4].forecastTemp }&deg;C</li>
      </ul>
    </div>
  );
};
