// 1 - Test that getWeatherData actually makes the external data call
// 2 - Test that a successful request returns the right data
// 3 - Test that an unsuccessful request returns the error

import axios from 'axios';

import { vi, describe, it, expect, test } from 'vitest';

import { getWeatherData } from '../src/utils/weatherDataService.js';

vi.mock(`axios`);

describe('getWeather tests', () => {
  describe('GET request tests to /products', () => {
    it('1 - should actually make the external data call', async () => {
      // Arrange
      // When you come across the axios.get call in the function under test, use this function to get the resolved data
      axios.get.mockResolvedValueOnce({ data: testProducts });
      // Act
      await getWeatherData();
      // Assert
      expect(axios.get).toHaveBeenCalledWith(`http://localhost:3000/products`);
    });
    //   test('2 - should have successful request returning the right data', async () => {
    //     // Arrange
    //     axios.get.mockResolvedValueOnce({ data: testProducts });
    //     // Act
    //     const result = await getProducts();
    //     // Assert
    //     expect(result).toEqual(testProducts);
    //   });
    //   test('3 - should have unsuccessful request returning the error object', async () => {
    //     // Arrange
    //     const error = { message: `Error` };
    //     axios.get.mockRejectedValueOnce(error);
    //     // Act
    //     const result = await getProducts();
    //     // Assert
    //     expect(result).toBe(error);
    //   });
  });
});
