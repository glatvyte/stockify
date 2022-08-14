import { useState } from "react";
import "./Filter.scss";

function Filter({ onTermSubmit, onInputValueChange, loading }) {
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
      setTerm(e.target.value.toUpperCase());
      setError("");
    }
  };

  const renderError = () => {
    return <div className="ui pointing below red basic label">{error}</div>;
  };

  return (
    <div className="search-bar-container">
      {!error ? null : renderError()}
      <form onSubmit={onSubmit}>
        <div className={`ui input action container ${!error ? null : "error"}`}>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder="Search by company stock symbol..."
            name="keyword"
            className="search-bar"
            autoComplete="off" //nuimti po demo filmuko
          />
          <button
            className={`ui button blue ${loading === true ? "loading" : ""}`}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
