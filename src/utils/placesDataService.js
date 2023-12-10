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

// export function getPlaceData(searchString) {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'fsq3LDTa8q4Z/g6AUI9du2j4nW0e5hQJ4miJb6uljT/VH0E=',
//     },
//   };
//   fetch(
//     `https://api.foursquare.com/v3/places/search?query=london&categories=16062`,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// }

// export function getPlaceData(searchString) {
//   try {
//     return axios
//       .get(
//         `https://api.foursquare.com/v3/places/search?query=paris&apiK`,
//         {
//           params: {
//             query: searchString,
//             // apiKey: 'fsq3LDTa8q4Z/g6AUI9du2j4nW0e5hQJ4miJb6uljT/VH0E=',
//           },
//         },
//         {
//           headers: {
//             Authorization: `fsq3LDTa8q4Z/g6AUI9du2j4nW0e5hQJ4miJb6uljT/VH0E=`,
//           },
//         }
//       )
//       .then(({ data }) => {
//         return {
//           parsedData: parsePlaceData(data),
//         };
//       });
//   } catch (error) {
//     return error;
//   }
// }

// function parsePlaceData(data) {
//   return data;
// }

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
