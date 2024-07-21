const FilterButton = ({ setRegion }) => {
  return (
    <div className="filter-button">
      <select
        name="region"
        defaultValue={"DEFAULT"}
        onChange={(e)=> {setRegion(e.target.value)}}
      >
        <option value="DEFAULT" disabled>
          Filter by Region
        </option>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterButton;
