import { useEffect } from "react";
import { useState } from "react";
import { getAllCountries, getCountryByName } from "./services/countries";

function CountryDetails({ name }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getCountryByName(name).then((det) => setDetails(det.data));
  }, [name]);
  //console.log(details);

  if (details) {
    let langs = details.languages;
    //console.log(langs);

    var langArr = Object.values(langs);

    //console.log(myArr);
  }

  return (
    <div>
      <h1> {details && details.name.common} </h1>

      <span> capital {details && details.capital[0]}</span>
      <br />
      <span> area {details && details.area}</span>

      <h3>languages</h3>
      {details && (
        <ul>
          {langArr.map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
      )}

      <p>{details && <img src={details.flags.png} alt={`${name} flag`} />}</p>
    </div>
  );
}

function Countries({ countryList }) {
  return (
    <div>
      <span>
        {countryList && countryList.length < 10
          ? countryList.map((country) => <div key={country}>{country}</div>)
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

  let countryToShow = [];

  // If we find the exact match  we push that to the countryToShow array
  const exactMatch = countryList.find(
    (countryName) =>
      countryName.toLowerCase().trim() === country.toLowerCase().trim()
  );
  if (exactMatch) {
    countryToShow.push(exactMatch);
  }

  // we find the partial match , as we don't find the exact match
  if (countryToShow.length === 0) {
    const partialMatch = countryList.filter((countryName) =>
      countryName.toLowerCase().trim().includes(country.toLowerCase().trim())
    );

    countryToShow = [...partialMatch];
  }

  return (
    <div>
      <span>
        find countries <input type="text" onChange={handleInputChange} />
      </span>
      <div>
        {countryToShow.length === 1 ? (
          <CountryDetails name={countryToShow[0]} />
        ) : (
          country && <Countries countryList={countryToShow} />
        )}
      </div>
    </div>
  );
}

export default App;
