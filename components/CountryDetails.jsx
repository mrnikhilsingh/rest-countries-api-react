import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../src/countriesStyles.css";
import { ThemeContext } from "../contexts/ThemeContext";
import CountryDetailsShimmer from "./CountryDetailsShimmer";

const Countries = () => {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const [isDark] = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data.name.nativeName?.[0]?.common || data.name.common);
        setCountryData({
          name: data.name.common,
          nativeName: data.name.nativeName?.[0]?.common || data.name.common,
          flag: data.flags.svg,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currencies: Object.values(data.currencies || {})
            .map((currency) => currency.name)
            .join(", "),
          symbol: data.currencies?.[0]?.symbol || "",
          languages: Object.values(data.languages || {}),
          borderCountries: [],
        });

        // synchronous promise call
        // Promise.all(
        //   data.borders.map((border) => {
        //     return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        //       .then((res) => res.json())
        //       .then(([data]) => {
        //         return data.name.common;
        //       });
        //   })
        // ).then((borderCountries) => {
        //   setCountryData((prevState)=>({...prevState, borderCountries}))
        // });

        if (!data.borders) {
          data.borders = [];
        }

        // asynchronous promise call
        Promise.all(
          data.borders.map(async (border) => {
            const res = await fetch(
              `https://restcountries.com/v3.1/alpha/${border}`
            );
            const [data] = await res.json();
            return data.name.common;
          })
        ).then((borderCountries) => {
          setCountryData((prevState) => ({ ...prevState, borderCountries }));
        });
      })
      .catch((error) => {
        console.log(error);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <h1>Oopss... Country Not Found !!</h1>;
  }

  return (
    <main className={isDark ? "darkMode" : ""}>
      <div className="back-container">
        <button
          className="back-button"
          onClick={() => {
            history.back();
          }}
        >
          <i className="ri-arrow-left-line"></i> Back
        </button>
      </div>
      {countryData === null ? (
        <CountryDetailsShimmer />
      ) : (
        <div className="container">
          <div className="country-image">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
          </div>
          <div className="country-details">
            <h1 className="country-name">{countryData.name}</h1>
            <div className="main-text">
              <div className="half">
                <p>
                  <b>Native Name: </b>{" "}
                  <span className="native-name">{countryData.nativeName}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">
                    {countryData.population.toLocaleString("en-IN")}
                  </span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{countryData.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{countryData.subregion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">
                    {countryData.capital?.join(", ")}
                  </span>
                </p>
              </div>
              <div className="half">
                <p>
                  <b>Top Level Domain:</b>{" "}
                  <span className="tld">{countryData.tld.join(", ")}</span>
                </p>
                <p>
                  <b>Currencies:</b>{" "}
                  <span className="currency">{countryData.currencies}</span>
                </p>
                <p>
                  <b>Currency Symbol: </b>
                  <span className="currency-symbol">{countryData.symbol}</span>
                </p>
                <p>
                  <b>Languages:</b>{" "}
                  <span className="languages">
                    {countryData.languages.join(", ")}
                  </span>
                </p>
              </div>
            </div>
            <div className="border-countries">
              <p>Border Countries: </p>
              {countryData.borderCountries.length !== 0
                ? countryData.borderCountries.map((borderCountry, index) => {
                    return (
                      <Link to={`/${borderCountry}`} key={index}>
                        {borderCountry}
                      </Link>
                    );
                  })
                : "No border countries"}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Countries;
