import axios from 'axios';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { getPlaceData } from '../src/utils/placesDataService.js';

vi.mock('axios');

const response = { features: [{ properties: { city: 'Glasgow', lat: 55.86, lon: -4.25 } }] };

afterEach(() => {
  vi.resetAllMocks();
  vi.unstubAllEnvs();
});

describe('getPlaceData', () => {
  it('searches Geoapify directly with the local key', async () => {
    vi.stubEnv('VITE_GEOAPIFY_KEY', 'local-key');
    axios.get.mockResolvedValueOnce({ data: response });

    const place = await getPlaceData('Glasgow');

    expect(axios.get).toHaveBeenCalledWith('https://api.geoapify.com/v1/geocode/search', {
      params: { text: 'Glasgow', apiKey: 'local-key' },
    });
    expect(place.parsedData.city).toBe('Glasgow');
  });

  it('uses the proxy, without a key, when one is configured', async () => {
    vi.stubEnv('VITE_GEOAPIFY_KEY', 'local-key');
    vi.stubEnv('VITE_PLACES_URL', '/api/places');
    axios.get.mockResolvedValueOnce({ data: response });

    await getPlaceData('Glasgow');

    expect(axios.get).toHaveBeenCalledWith('/api/places/v1/geocode/search', { params: { text: 'Glasgow' } });
  });
});
