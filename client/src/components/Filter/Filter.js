import { useState } from "react";
import "./Filter.css";

function Filter({ onTermSubmit, onInputValueChange }) {
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onInputValueChange(term);
  };

  const onInputChange = (e) => {
    const re = /^[a-zA-Z\s]*$/;
    if (e.target.value.length <= 35 && " " && re.test(e.target.value)) {
      setTerm(e.target.value);
      setError("");
    } else {
      setError(
        "Only letters including space are allowed. Please use less than 35 characters."
      );
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
            <div className="ui input action container search-bar">
              <input
                type="text"
                value={term}
                onChange={onInputChange}
                placeholder="Enter your keywords here..."
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
