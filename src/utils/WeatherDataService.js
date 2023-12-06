import axios from 'axios';

export function getWeatherData(lat, lon, timezone) {
  try {
    return axios
      .get(
        `https://api.open-meteo.com/v1/forecast?&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max&timeformat=unixtime`,
        {
          params: {
            latitude: lat,
            longitude: lon,
            timezone,
          },
        }
      )
      .then(({ data }) => {
        return {
          current: parseCurrentWeather(data),
          daily: parseDailyWeather(data),
        };
      });
  } catch (error) {
    return error;
  }
}

function parseCurrentWeather({ current }) {
  const { temperature_2m: currentTemp, weather_code: iconCode } = current;
  return {
    currentTemp,
    iconCode,
  };
}

function parseDailyWeather({ daily }) {
  return daily.time.map((time, index) => {
    return {
      timestamp: time * 1000,
      iconCode: daily.weather_code[index],
      forecastTemp: Math.round(daily.temperature_2m_max[index]),
    };
  });
}
