import axios from 'axios';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { getWeatherData } from '../src/utils/weatherDataService.js';

vi.mock('axios');

const response = {
  current: { temperature_2m: 12.3, weather_code: 3 },
  daily: {
    time: [1700000000, 1700086400],
    weather_code: [3, 61],
    temperature_2m_max: [13.6, 9.2],
  },
};

afterEach(() => {
  vi.resetAllMocks();
});

describe('getWeatherData', () => {
  it('asks Open-Meteo for the forecast at the given place and time zone', async () => {
    axios.get.mockResolvedValueOnce({ data: response });

    await getWeatherData(55.86, -4.25, 'Europe/London');

    const [url, { params }] = axios.get.mock.calls[0];
    expect(url).toContain('https://api.open-meteo.com/v1/forecast');
    expect(params).toEqual({ latitude: 55.86, longitude: -4.25, timezone: 'Europe/London' });
  });

  it('returns the current weather and a daily forecast', async () => {
    axios.get.mockResolvedValueOnce({ data: response });

    const weather = await getWeatherData(55.86, -4.25, 'Europe/London');

    expect(weather.current).toEqual({ currentTemp: 12.3, iconCode: 3 });
    expect(weather.daily).toEqual([
      { timestamp: 1700000000000, iconCode: 3, forecastTemp: 14 },
      { timestamp: 1700086400000, iconCode: 61, forecastTemp: 9 },
    ]);
  });

  it('passes request failures on to the caller', async () => {
    axios.get.mockRejectedValueOnce(new Error('offline'));
    await expect(getWeatherData(0, 0, 'UTC')).rejects.toThrow('offline');
  });
});
