import { useEffect, useState } from "react";
import * as finnhub from "finnhub";
import Filter from "../Filter/Filter";
import Results from "../Results/Results";
import "./App.css";

//Sukurk Results componenta
//sukurti validationa Filtre
//Uzsaugoti company profile data
const personalApiKey = process.env.REACT_APP_API_KEY;
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = personalApiKey;
const finnhubClient = new finnhub.DefaultApi();

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [companyList, setCompanyList] = useState([]);

  const search = () => {
    if (inputValue) {
      finnhubClient.companyProfile2(
        { symbol: inputValue },
        (error, data, response) => {
          console.log(error, "error");
          console.log(data, "data");
          console.log(response, "response");
          if (typeof data === Array) {
            console.log("Arrayjus");
            setCompanyList(data);
          } else {
            console.log("vienas tik");
            setCompanyList([data]);
          }
        }
      );
    }
  };

  useEffect(() => {
    search();
  }, [inputValue]);

  return (
    <div className="App">
      <Filter onInputValueChange={setInputValue} />
      <Results />
      {companyList[0]?.name}
    </div>
  );
};

export default App;
