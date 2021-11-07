import "./search-box.styles.css";

function SearchBox({ changeHandler, placeholder }) {
  return (
    <input
      className="search"
      type="search"
      onChange={changeHandler}
      placeholder={placeholder}
    />
  );
}

export default SearchBox;
