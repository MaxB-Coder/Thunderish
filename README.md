![Header](./public/thunderish-banner.png)

## A weather application aimed at providing users with accurate and up-to-date weather forecasts.

Overview: Thunderish is a clean and simple weather app that uses the Open-Meteo weather API (https://open-meteo.com/) and the Geoapify places API (https://www.geoapify.com/) to facilitate lookup of the current weather and 5-day forecast for a search location.

Inspiration: The Weather Channel, AccuWeather, Weather Underground

Objectives:

- Develop a responsive web application for displaying weather data.
- Implement integration with a weather data API to fetch forecast information.
- Design an easy-to-navigate user interface that presents weather information clearly.

Features to Implement:

_User-friendly interface displaying current weather conditions with temperature, conditions, and icons._

#### User Story 1

```
As a user,
I want the weather forecast to show the temperature,
So that I know if I need to wear extra layers.
```

| Objects        | Properties           | Messages         | Output                       |
| -------------- | -------------------- | ---------------- | ---------------------------- |
| WeatherReading | temperature(@Object) | getTemperature() | WeatherReading(@temperature) |

##### Tests

1. Check that the correct temperature is displayed.

#### User Story 2

```
As a user,
I want the weather forecast to show the weather conditions,
So that I know if it's safe to go out.
```

| Objects        | Properties                | Messages              | Output                            |
| -------------- | ------------------------- | --------------------- | --------------------------------- |
| WeatherReading | weatherCondition(@Object) | getWeatherCondition() | WeatherReading(@weatherCondition) |

##### Tests

1. Check that the correct condition is displayed.

#### User Story 3

```
As a user,
I want the weather forecast to use icons,
So that the app is more visually appealing.
```

| Objects        | Properties           | Messages         | Output                       |
| -------------- | -------------------- | ---------------- | ---------------------------- |
| WeatherReading | weatherIcon(@Object) | getWeatherIcon() | WeatherReading(@weatherIcon) |

##### Tests

1. Check that the correct weather icon is displayed.

#### User Story 4

_Location-based weather data retrieval._

```
As a user,
I want location-based weather data,
So that I can see the local data.
```

| Objects         | Properties        | Messages      | Output             |
| --------------- | ----------------- | ------------- | ------------------ |
| WeatherForecast | location(@Object) | getLocation() | Weather(@location) |

##### Tests

1. Check that the correct location is displayed

#### User Story 5

_5-day weather forecast with temperature, conditions, and icons._

```
As a user,
I want to view the weather forecast for the next five days,
So that I can make plans with piece of mind.
```

| Objects         | Properties                        | Messages      | Output                     |
| --------------- | --------------------------------- | ------------- | -------------------------- |
| WeatherForecast | Forecast(@array[@weatherReading]) | getForecast() | WeatherForecast(@Forecast) |

##### Tests

1. Check that the correct five day weather forecast is displayed.

#### User Story 6

_Real-time updates of weather conditions._

```
As a user,
I want real-time updates of weather conditions,
So that I can accurately see when the weather is changing.
```

| Objects         | Properties | Messages     | Output                                                     |
| --------------- | ---------- | ------------ | ---------------------------------------------------------- |
| WeatherForecast |            | getWeather() | WeatherReading(@temperature, @condition, @location, @icon) |

##### Tests

1. Check that the weather is updated every 10s.

Technologies:

\*Front-end: HTML, CSS, JavaScript (React)
Back-end: Node.js, Express.js (for API integration)
Weather API: Meteomatics
