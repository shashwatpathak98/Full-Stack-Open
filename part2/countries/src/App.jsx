import { useEffect } from "react";
import { useState } from "react";
import {
  getAllCountries,
  getCountryByName,
  getCountryWeather,
} from "./services/countries";

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

  if (!details) return <></>;

  return (
    <div>
      <h1> {details.name.common} </h1>

      <span> capital {details.capital[0]}</span>
      <br />
      <span> area {details.area}</span>

      <h3>languages</h3>
      {
        <ul>
          {langArr.map((lang) => (
            <li key={Math.random() * 1000}>{lang}</li>
          ))}
        </ul>
      }

      <p>{<img src={details.flags.png} alt={`${name} flag`} />}</p>
      <h3> Weather in {details.capital[0]}</h3>
      <div>
        <CountryWeather
          lat={details.capitalInfo.latlng[0]}
          lng={details.capitalInfo.latlng[1]}
        />
      </div>
    </div>
  );
}

function CountryWeather({ lat, lng }) {
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    getCountryWeather(lat, lng).then((weather) =>
      setWeatherDetails(weather.data)
    );
  }, [lat, lng]);

  if(weatherDetails){
    let displayTemeperature = weatherDetails.main
    var tempArr = Object.values(displayTemeperature)
    let displayIcon = weatherDetails.weather[0]
    var iconArr = Object.values(displayIcon)
    let windObj = weatherDetails.wind
    var windArr = Object.values(windObj)
    //console.log(windArr);
  }

  //console.log(weatherDetails);

  if(!weatherDetails) return <></>
  return (
  <div>
     temperature {(tempArr[0] - 273.15).toFixed(2)} Celcius
     <div>
     <img src={`https://openweathermap.org/img/wn/${iconArr[3]}@2x.png`} alt="image of weather" />
     </div>
     <div>
      wind {windArr[0]} m/s
     </div>
  </div>
  );
}

function Countries({ countryList }) {
  const [countryButton, setCountryButton] = useState("");

  const setButton = (country) => {
    setCountryButton(country);
  };

  return (
    <div>
      <span>
        {countryList && countryList.length < 10
          ? countryList.map((country) => (
              <div key={country}>
                {country}
                <button
                  key={Math.random() * 100000}
                  onClick={() => setButton(country)}
                >
                  show
                </button>
              </div>
            ))
          : "Too many countries"}
      </span>
      {countryButton ? (
        <CountryDetails name={countryButton} />
      ) : (
        <div key={countryButton}></div>
      )}
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
