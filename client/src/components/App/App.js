import { useState } from "react";
import * as finnhub from "finnhub";
import Filter from "../Filter/Filter";
import Results from "../Results/Results";
import "./App.css";

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cboda52ad3i6ndrm6qo0";
const finnhubClient = new finnhub.DefaultApi();

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const search = () => {
    console.log("searchinam");
    finnhubClient.companyProfile2(
      { symbol: inputValue },
      (error, data, response) => {
        console.log(error, "error");
        console.log(data, "data");
        console.log(response, "response");
      }
    );
  };

  return (
    <div className="App">
      <Filter onTermSubmit={search} onInputValueChange={setInputValue} />
      <Results />
    </div>
  );
};

export default App;
