import axios from 'axios';

export function getPlaceData(searchString) {
  try {
    return axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?apiKey=50b4e040ef33410e872dca4fbb94bfd5`,
        {
          params: {
            text: searchString,
          },
        }
      )
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
