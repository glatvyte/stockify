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
  const [selectedCompany, setSelectedCompany] = useState({});
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
          //ERROR HANDLE
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
    if (!isEmptyObject(company)) {
      setSelectedCompany(company);
      finnhubClient.stockCandles(
        company.ticker,
        "D",
        dateFrom,
        dateTo,
        (error, data, response) => {
          console.log(data);
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
    setDateFrom(Math.floor((Date.now() - 7 * 24 * 60 * 60) / 1000));
    setDateTo(Math.floor(Date.now() / 1000));
  };

  const renderStockChart = () => {
    if (!isEmptyObject(stockCandles)) {
      return (
        <StockChart
          stockCandles={stockCandles}
          onModalClose={onModalClose}
          onChangeDates={onChangeDates}
        />
      );
    }
  };

  const onChangeDates = (event, data) => {
    if (data.value.length === 2) {
      setDateFrom(Math.floor(new Date(data.value[0]).getTime() / 1000));
      setDateTo(Math.floor(new Date(data.value[1]).getTime() / 1000));
      console.log(dateFrom, "dateFrom");
      console.log(dateTo, "dateTo");
    }
  };

  useEffect(() => {
    search();
  }, [inputValue]);

  useEffect(() => {
    onCompanySelect(selectedCompany);
  }, [dateTo]);

  return (
    <div className="App">
      <Filter onInputValueChange={setInputValue} />
      <Results companyList={companyList} onCompanySelect={onCompanySelect} />
      {renderStockChart()}
      <button
        //   onClick={() => onShowMockedData(mockedCompany)}
        className="big ui blue basic button mock-button"
      >
        Mock Data
      </button>
    </div>
  );
};

export default App;
