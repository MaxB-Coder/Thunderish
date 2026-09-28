import axios from 'axios';

// Production builds set VITE_PLACES_URL (see .env.production) to a proxy on
// their own origin, which adds the key on the server, so no key ships in the bundle.
function placesSearch(text) {
  const proxy = import.meta.env.VITE_PLACES_URL;
  if (proxy) return [`${proxy}/v1/geocode/search`, { params: { text } }];
  return [
    'https://api.geoapify.com/v1/geocode/search',
    { params: { text, apiKey: import.meta.env.VITE_GEOAPIFY_KEY } },
  ];
}

export function getPlaceData(searchString) {
  try {
    return axios
      .get(...placesSearch(searchString))
      .then(({ data }) => {
        return {
          parsedData: parsePlaceData(data),
        };
      });
  } catch (error) {
    return error;
  }
}

function parsePlaceData(data) {
  return data.features[0].properties;
}
