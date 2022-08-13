import { useState } from "react";
import "./Filter.css";

function Filter({ onTermSubmit, onInputValueChange }) {
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onInputValueChange(term);
    setTerm("");
  };

  const onInputChange = (e) => {
    const re = /^[a-zA-Z\s]*$/g;
    if (!re.test(e.target.value)) {
      setError("Only letters including space are allowed.");
    } else if (e.target.value.length > 35) {
      setError("Please use less than 35 characters.");
    } else {
      setTerm(e.target.value);
      setError("");
    }
  };

  const renderError = () => {
    return <div className="ui pointing below red basic label">{error}</div>;
  };

  return (
    <div>
      {!error ? null : renderError()}
      <div className="search-bar-container">
        <form onSubmit={onSubmit}>
          <div>
            {/* <label className="search-bar-label">{Strings.searchBarLabel}</label> */}
            <div className="ui input action container">
              <input
                type="text"
                value={term.toUpperCase()}
                onChange={onInputChange}
                placeholder="Search by company stock symbol..."
                name="keyword"
                className="search-bar"
              />
              <button className="ui button blue">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Filter;
