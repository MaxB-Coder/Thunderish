import axios from 'axios';

export function getPlaceData(searchString) {
  try {
    return axios
      .get(`https://api.geoapify.com/v1/geocode/search?`, {
        params: {
          text: searchString,
          apiKey: '50b4e040ef33410e872dca4fbb94bfd5',
        },
      })
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
          apiKey: '50b4e040ef33410e872dca4fbb94bfd5',
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
