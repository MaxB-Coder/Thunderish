# Thunderish

Project Name: Thunderish - Your Weather Forecast Companion

Overview: Thunderish is a weather application aimed at providing users with accurate and up-to-date weather forecasts. This project's goal is to create an intuitive platform that enables users to access weather information and forecasts seamlessly.

Inspiration: The Weather Channel, AccuWeather, Weather Underground

Objectives:

- Develop a responsive web application for displaying weather data.
- Implement integration with a weather data API to fetch forecast information.
- Design an easy-to-navigate user interface that presents weather information clearly.

Features to Implement:

*User-friendly interface displaying current weather conditions with temperature, conditions, and icons.*

```
As a user,
I want the weather forecast to show the temperature,
So that I know if I need to wear extra layers.
```

| Objects        | Properties           | Messages         | Output                       |
| -------------- | -------------------- | ---------------- | ---------------------------- |
| WeatherReading | temperature(@Object) | getTemperature() | WeatherReading(@temperature) |

#####Tests

1. Check that the correct temperature is displayed.

```
As a user,
I want the weather forecast to show the weather conditions,
So that I know if it's safe to go out.
```

| Objects        | Properties                | Messages              | Output                            |
| -------------- | ------------------------- | --------------------- | --------------------------------- |
| WeatherReading | weatherCondition(@Object) | getWeatherCondition() | WeatherReading(@weatherCondition) |

#####Tests

1. Check that the correct condition is displayed.

```
As a user,
I want the weather forecast to use icons,
So that the app is more visually appealing.
```

| Objects        | Properties           | Messages         | Output                       |
| -------------- | -------------------- | ---------------- | ---------------------------- |
| WeatherReading | weatherIcon(@Object) | getWeatherIcon() | WeatherReading(@weatherIcon) |

#####Tests

1. Check that the correct weather icon is displayed.

*Location-based weather data retrieval.*

```
As a user,
I want location-based weather data,
So that I can see the local data.
```

| Objects         | Properties        | Messages      | Output             |
| --------------- | ----------------- | ------------- | ------------------ |
| WeatherForecast | location(@Object) | getLocation() | Weather(@location) |

#####Tests

1. Check that the correct location is displayed

*5-day weather forecast with temperature, conditions, and icons.*

```
As a user,
I want to view the weather forecast for the next five days,
So that I can make plans with piece of mind.
```

| Objects         | Properties                        | Messages      | Output                     |
| --------------- | --------------------------------- | ------------- | -------------------------- |
| WeatherForecast | Forecast(@array[@weatherReading]) | getForecast() | WeatherForecast(@Forecast) |

#####Tests

1. Check that the correct five day weather forecast is displayed.

*Real-time updates of weather conditions.*

```
As a user,
I want real-time updates of weather conditions,
So that I can accurately see when the weather is changing.
```

| Objects         | Properties | Messages     | Output                                                     |
| --------------- | ---------- | ------------ | ---------------------------------------------------------- |
| WeatherForecast |            | getWeather() | WeatherReading(@temperature, @condition, @location, @icon) |

#####Tests

1. Check that the weather is updated every 10s.

Technologies:

*Front-end: HTML, CSS, JavaScript (React)
Back-end: Node.js, Express.js (for API integration)
Weather API: OpenWeatherMap, Weatherstack, or similar*