import axios from "axios";

const getAllCountries = () => {
  return axios.get("https://studies.cs.helsinki.fi/restcountries/api/all");
};

const getCountryByName = (country) => {
  return axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
  );
};

const getCountryWeather = (lat, long) => {
  const api_key = import.meta.env.VITE_WEATHER_KEY;
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`
  );
};

export { getAllCountries, getCountryByName, getCountryWeather };
