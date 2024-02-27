import axios from "axios";

const getAllCountries = () => {
  return axios.get("https://studies.cs.helsinki.fi/restcountries/api/all");
};

const getCountryByName = (country) => {
  return axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
  );
};

export { getAllCountries, getCountryByName };
