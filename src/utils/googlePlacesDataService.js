// import axios from 'axios';

// function searchLocationAutocomplete(searchQuery) {
//   try {
//     return axios
//       .get(
//         `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchQuery}&types=geocode&key=${
//           import.meta.env.VITE_GOOGLE_MAPS_KEY
//         }`
//       )
//       .then(({ data }) => {
//         return {
//           predictions: parsePredictionData(data),
//         };
//       });
//   } catch (error) {
//     return error;
//   }
// }

// function parsePredictionData({ predictions }) {
//   console.log(predictions);
//   //const { temperature_2m: currentTemp, weather_code: iconCode } = predictions;
//   // return {
//   //   currentTemp,
//   //   iconCode,
//   // };
// }

// export default searchLocationAutocomplete;
