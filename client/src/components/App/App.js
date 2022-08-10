import { useEffect, useState } from "react";
import * as finnhub from "finnhub";
import Filter from "../Filter/Filter";
import Results from "../Results/Results";
import StockChart from "../StockChart/StockChart";
import "./App.css";

const personalApiKey = process.env.REACT_APP_API_KEY;
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = personalApiKey;
const finnhubClient = new finnhub.DefaultApi();

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [dateFrom, setDateFrom] = useState(
    Math.floor((Date.now() - 7 * 24 * 60 * 60) / 1000)
  );
  const [dateTo, setDateTo] = useState(Math.floor(Date.now() / 1000));
  const [stockCandles, setStockCandles] = useState({});

  const search = () => {
    if (inputValue) {
      finnhubClient.companyProfile2(
        { symbol: inputValue },
        (error, data, response) => {
          // console.log(error, "error");
          // console.log(data, "data");
          // console.log(response, "response");
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

  const onCompanySelect = (company) => {
    if (company) {
      finnhubClient.stockCandles(
        company.ticker,
        "D",
        dateFrom,
        dateTo,
        (error, data, response) => {
          //LOGIKA KAI NIEKO NEGAUNAM / ERROR HANDLINIMAS
          setStockCandles(data);
        }
      );
    }
  };

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const onModalClose = () => {
    setStockCandles({});
  };

  const renderStockChart = () => {
    if (!isEmptyObject(stockCandles)) {
      return (
        <StockChart stockCandles={stockCandles} onModalClose={onModalClose} />
      );
    }
  };

  useEffect(() => {
    search();
  }, [inputValue]);

  return (
    <div className="App">
      <Filter onInputValueChange={setInputValue} />
      <Results companyList={companyList} onCompanySelect={onCompanySelect} />
      {renderStockChart()}
    </div>
  );
};

export default App;
