import axios from 'axios';

export const getWeather = async (lat, lon, timezone) => {
    try {
        const responseData = await axios.get(`https://api.open-meteo.com/v1/forecast?&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max&timeformat=unixtime`, { 
            params: { 
                latitude:lat, 
                longitude:lon, 
                timezone
            }, 
        });
        return responseData.data;
    }
    catch (error) {
        return error;
    }
}
