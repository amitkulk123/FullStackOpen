
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearchChange = (event) => setSearch(event.target.value);

  // Fetch country data when search input changes
  useEffect(() => {
    if (search) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then((response) => {
          const filteredCountries = response.data.filter(country =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          );
          setCountries(filteredCountries);
        });
    } else {
      setCountries([]);
    }
  }, [search]);

  // Fetch weather data for the selected country’s capital
  useEffect(() => {
    if (selectedCountry) {
      const api_key = import.meta.env.VITE_SOME_KEY;
      const capital = selectedCountry.capital[0];
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
        .then((response) => setWeather(response.data))
        .catch((error) => console.error("Error fetching weather", error));
    }
  }, [selectedCountry]);

  const handleShowCountry = (country) => setSelectedCountry(country);

  // Display logic
  const renderCountries = () => {
    if (countries.length > 10) {
      return <p>Too many matches, please refine your search</p>;
    }
    if (countries.length > 1) {
      return countries.map((country) => (
        <div key={country.name.common}>
          {country.name.common} <button onClick={() => handleShowCountry(country)}>Show</button>
        </div>
      ));
    }
    if (countries.length === 1 && !selectedCountry) {
      // Set selected country here only once when there's exactly one country
      setSelectedCountry(countries[0]);
    }
  };

  return (
    <div>
      <h1>Country Finder</h1>
      <input value={search} onChange={handleSearchChange} placeholder="Search countries" />
      {renderCountries()}
      {selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Area: {selectedCountry.area} km²</p>
          <p>Languages: {Object.values(selectedCountry.languages).join(', ')}</p>
          <img src={selectedCountry.flags.png} alt={`Flag of ${selectedCountry.name.common}`} width="100" />
          {weather && (
            <div>
              <h3>Weather in {selectedCountry.capital[0]}</h3>
              <p>Temperature: {weather.main.temp} °C</p>
              <p>Wind: {weather.wind.speed} m/s</p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather icon"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
