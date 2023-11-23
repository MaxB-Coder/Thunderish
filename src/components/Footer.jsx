export const Footer = () => {
  return (
    <div className="footer">
      <div className="today">
        <div className="currentTemp">
          <h2 className='searchName'>New York</h2>
          <h1>25&deg;C</h1>
        </div>
          <img className="conditionToday" src="./cloud.svg" alt="weather condition" />
      </div> 
       <ul className="fiveDayForecast">
          <li className='forecastDay'>Tomorrow<br /><br /><img className="forecastDayIcon" src="./cloud-bolt.svg" alt="weather condition" /><br /><br />20&deg;C</li>
          <li className='forecastDay'>Thursday<br /><br /><img className="forecastDayIcon" src="./cloud-shower-heavy.svg" alt="weather condition" /><br /><br />20&deg;C</li>
          <li className='forecastDay'>Friday<br /><br /><img className="forecastDayIcon" src="./cloud-sun.svg" alt="weather condition" /><br /><br />20&deg;C</li>
          <li className='forecastDay'>Saturday<br /><br /><img className="forecastDayIcon" src="./snowflake.svg" alt="weather condition" /><br /><br />20&deg;C</li>
        </ul>
    </div>
  )
}
