const SearchBox = ({ searchData, onSearchInput }) => {
  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={searchData}
        onChange={onSearchInput}
      />
    </div>
  );
};

export default SearchBox;
