const SearchBox = ({setQuery}) => {
  return (
    <div className="search-box">
      <div className="search-icon">
        <i className="ri-search-line" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};

export default SearchBox;
