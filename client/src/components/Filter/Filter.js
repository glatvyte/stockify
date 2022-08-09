import { useState } from "react";
import "./Filter.css";

function Filter({ onTermSubmit, onInputValueChange }) {
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term, "term is onSubmit");
    onInputValueChange(term);
    onTermSubmit(term);
  };

  const onInputChange = (e) => {
    console.log("oninputchange");
    // const re = /^(?=.{1,20}$).*/;
    // if (e.target.value === "" || re.test(e.target.value)){
    setTerm(e.target.value);
    console.log(term, "term");
    // setError("")
    // } else {
    //   setError(Strings.inputValidationError);
    // }
  };

  const renderError = () => {
    return <div className="ui pointing red basic label">{error}</div>;
  };

  return (
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
            <button className="ui button red">Go!</button>
          </div>
        </div>
        <div>{!error ? null : renderError()}</div>
      </form>
    </div>
  );
}

export default Filter;
