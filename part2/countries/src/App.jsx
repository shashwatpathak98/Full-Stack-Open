import { useEffect } from "react";
import { useState } from "react";
import { getAllCountries } from "./services/countries";

function Countries({ countryList, country }) {
  let countryToShow = [];

  for (let i = 0; i < countryList.length; i++) {
    // If we find the exact match  we push that to the countryToShow array
    if (countryList[i].toLowerCase().trim() === country.toLowerCase().trim()) {
      countryToShow.push(countryList[i]);
    }
  }

  // we find the partial match , as we don't find the exact match
  if (countryToShow.length === 0) {
    for (let i = 0; i < countryList.length; i++) {
      if (
        country &&
        countryList[i]
          .toLowerCase()
          .trim()
          .includes(country.toLowerCase().trim())
      ) {
        countryToShow.push(countryList[i]);
      }
    }
  }

  return (
    <div>
      <span>
        {countryToShow && countryToShow.length < 10
          ? countryToShow.map((country) => <div key={country}>{country}</div>)
          : "Too many countries"}
      </span>
    </div>
  );
}

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    getAllCountries().then((countries) => setCountries(countries.data));
    //console.log(countries);
  }, []);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };

  const countryList = countries.map((country) => country.name.common);
  // console.log(countryList);

  return (
    <div>
      <span>
        find countries <input type="text" onChange={handleInputChange} />
      </span>
      <div>
        <Countries countryList={countryList} country={country} />
      </div>
    </div>
  );
}

export default App;
