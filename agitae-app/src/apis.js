import axios from "axios";

const API_GEOCODING_KEY = '5d8421b5d0b345d3afa6154ca8323db0';
const API_WEATHER_KEY = "91a4e421c45d0cf6e5e18d20fb93eb2a";

const waetherAPI = {
  async getWeatherInfoByAddress(address) {
    try {
      const geocodingResponse = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${API_GEOCODING_KEY}`);
      const geocodingResult = geocodingResponse.data;
      const lon = geocodingResult.features[0].properties.lon;
      const lat = geocodingResult.features[0].properties.lat;

      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=${API_WEATHER_KEY}`);
      const weatherData = weatherResponse.data;

      return weatherData;
    } catch (error) {
      throw error;
    }
  },
};

export default waetherAPI;
