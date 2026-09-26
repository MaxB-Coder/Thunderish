import axios from 'axios';

const GEOAPIFY_KEY = import.meta.env.VITE_GEOAPIFY_KEY;

// The portfolio's demo build sets VITE_PLACES_URL to its own proxy, which adds
// the key on the server, so no key ships in the demo bundle.
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

export function getPlaceImageData(placeID) {
  try {
    return axios
      .get(`https://api.geoapify.com/v2/place-details?`, {
        params: {
          id: placeID,
          apiKey: GEOAPIFY_KEY,
        },
      })
      .then(({ data }) => {
        return {
          parsedData: parsePlaceImageData(data),
        };
      });
  } catch (error) {
    return error;
  }
}

function parsePlaceImageData(data) {
  return data.features[0].properties.wiki_and_media;
}
