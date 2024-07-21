import { Link } from "react-router-dom";

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <Link
      className="card"
      to={`/${name}`}
      title={name}
    >
      <img src={flag} alt={name} />
      <div className="card-text">
        <h3>{name}</h3>
        <p>
          <b>Population:</b> {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
