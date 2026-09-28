import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from '../src/App.jsx';
import { getPlaceData } from '../src/utils/placesDataService.js';
import { getWeatherData } from '../src/utils/weatherDataService.js';

vi.mock('../src/utils/placesDataService.js', () => ({ getPlaceData: vi.fn() }));
vi.mock('../src/utils/weatherDataService.js', () => ({ getWeatherData: vi.fn() }));

const weather = {
  current: { iconCode: 0, currentTemp: 12.4 },
  daily: Array.from({ length: 5 }, (_, i) => ({ timestamp: Date.UTC(2026, 8, 28 + i, 12), iconCode: i === 2 ? 61 : 0, forecastTemp: 14 + i })),
};

function search(text) {
  const box = screen.getByRole('searchbox', { name: 'Search for a place' });
  fireEvent.change(box, { target: { value: text } });
  fireEvent.submit(box.closest('form'));
}

describe('Thunderish', () => {
  beforeEach(() => {
    vi.mocked(getPlaceData).mockReset();
    vi.mocked(getWeatherData).mockReset();
  });

  it('opens on a welcome, not a search that never finishes', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Thunderish' })).toBeInTheDocument();
    expect(screen.queryByText('Searching...')).not.toBeInTheDocument();
    expect(getPlaceData).not.toHaveBeenCalled();
    for (const city of ['Glasgow', 'London', 'New York', 'Tokyo']) {
      expect(screen.getByRole('button', { name: city })).toBeInTheDocument();
    }
  });

  it('shows the weather for a city picked on the welcome', async () => {
    vi.mocked(getPlaceData).mockResolvedValue({ parsedData: { city: 'Tokyo', lat: 35.7, lon: 139.7 } });
    vi.mocked(getWeatherData).mockResolvedValue(weather);
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Tokyo' }));
    expect(await screen.findByRole('heading', { name: 'Tokyo' })).toBeInTheDocument();
    expect(screen.getByText(/12/)).toBeInTheDocument();
  });

  it('describes the weather in words as well as the icon', async () => {
    vi.mocked(getPlaceData).mockResolvedValue({ parsedData: { city: 'Tokyo', lat: 35.7, lon: 139.7 } });
    vi.mocked(getWeatherData).mockResolvedValue(weather);
    render(<App />);
    search('Tokyo');
    expect(await screen.findByText('Clear')).toBeInTheDocument();
    expect(screen.getByText('12°')).toBeInTheDocument();
  });

  it('lists the next four days with their weather and highs', async () => {
    vi.mocked(getPlaceData).mockResolvedValue({ parsedData: { city: 'Tokyo', lat: 35.7, lon: 139.7 } });
    vi.mocked(getWeatherData).mockResolvedValue(weather);
    render(<App />);
    search('Tokyo');
    const days = within(await screen.findByRole('list', { name: 'Next four days' })).getAllByRole('listitem');
    expect(days).toHaveLength(4);
    expect(days[0]).toHaveTextContent('Tue');
    expect(days[0]).toHaveTextContent('15°');
    expect(within(days[1]).getByRole('img', { name: 'Rain' })).toBeInTheDocument();
  });

  it('names a place that has no city, such as a state', async () => {
    vi.mocked(getPlaceData).mockResolvedValue({ parsedData: { name: 'New York', lat: 43, lon: -75 } });
    vi.mocked(getWeatherData).mockResolvedValue(weather);
    render(<App />);
    search('New York');
    expect(await screen.findByRole('heading', { name: 'New York' })).toBeInTheDocument();
  });

  it('says so when a place cannot be found, instead of searching forever', async () => {
    vi.mocked(getPlaceData).mockRejectedValue(new Error('no results'));
    render(<App />);
    search('Nowhereville');
    expect(await screen.findByText(/couldn.t find/i)).toBeInTheDocument();
  });
});
