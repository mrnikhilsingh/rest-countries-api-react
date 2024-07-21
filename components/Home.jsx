import SearchBox from "./SearchBox";
import FilterButton from "./FilterButton";
import CountryCard from "./CountryCard";
import { useContext, useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import "./shimmerStyle.css";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [region, setRegion] = useState("");
  const [isDark] = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <main className={isDark ? "darkMode" : ""}>
      <div className="filter-section">
        <SearchBox setQuery={setQuery} />
        <FilterButton setRegion={setRegion} />
      </div>
      <div className="card-container">
        {countriesData.length === 0 ? (
          <ShimmerCard />
        ) : (
          countriesData
            .filter((country) => {
              if (region === "") {
                return country.name.common.toLowerCase().includes(query);
              } else {
                return (
                  country.region.includes(region) &&
                  country.name.common.toLowerCase().includes(query)
                );
              }
            })
            .map((country, index) => {
              return (
                <CountryCard
                  key={index}
                  flag={country.flags.svg}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              );
            })
        )}
      </div>
    </main>
  );
};

export default Home;
