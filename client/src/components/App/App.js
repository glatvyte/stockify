import axios from "axios";
import { useEffect, useState } from "react";
import * as finnhub from "finnhub";
import Filter from "../Filter/Filter";
import Results from "../Results/Results";
import StockChart from "../StockChart/StockChart";
import mockedCompanyData from "../../utils/mockData";
import Strings from "../../utils/strings";
import isEmptyObject from "../../utils/helpers";

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
    Math.floor((Date.now() - 7 * 24 * 60 * 60 * 1000) / 1000)
  );
  const [dateTo, setDateTo] = useState(Math.floor(Date.now() / 1000));
  const [stockCandles, setStockCandles] = useState({});

  const search = () => {
    if (inputValue) {
      finnhubClient.companyProfile2(
        { symbol: inputValue },
        (error, data, response) => {
          //ERROR HANDLE
          typeof data === Array ? setCompanyList(data) : setCompanyList([data]);
        }
      );
    }
  };

  const selectedCompanyLogger = async (company, stockHistory) => {
    await axios
      .post(`${Strings.loggerApiUrl}/selectedCompany`, {
        name: company.name,
        stockHistory: stockHistory,
      })
      .then(
        (res) => {
          console.log(res.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const onCompanySelect = (company) => {
    console.log("onCompanySelect callinasi, tikrinsim ar empty");
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
          selectedCompanyLogger(company, data);
          setStockCandles(data);
        }
      );
    }
  };

  const onModalClose = () => {
    setStockCandles({});
    setDateFrom(Math.floor((Date.now() - 7 * 24 * 60 * 60 * 1000) / 1000));
    setDateTo(Math.floor(Date.now() / 1000));
  };

  const renderStockChart = () => {
    if (!isEmptyObject(stockCandles)) {
      return (
        <StockChart
          stockCandles={stockCandles}
          onModalClose={onModalClose}
          onChangeDates={onChangeDates}
          selectedCompany={selectedCompany}
          dates={[new Date(dateFrom * 1000), new Date(dateTo * 1000)]}
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
    if (!isEmptyObject(stockCandles)) {
      onCompanySelect(selectedCompany);
    }
  }, [dateTo]);

  const showMockData = () => {
    setCompanyList(mockedCompanyData);
  };

  // console.log(
  //   "Default 7 days ago: ",
  //   Math.floor((Date.now() - 7 * 24 * 60 * 60 * 1000) / 1000),
  //   new Date(Math.floor((Date.now() - 7 * 24 * 60 * 60 * 1000) / 1000) * 1000)
  // );
  // console.log("Default now: ", Math.floor(Date.now() / 1000), new Date());
  return (
    <div className="App">
      <Filter onInputValueChange={setInputValue} />
      <Results
        companyList={companyList}
        onCompanySelect={onCompanySelect}
        term={inputValue}
      />
      {renderStockChart()}
      <button onClick={showMockData} className="ui button green">
        Mock Data
      </button>
    </div>
  );
};

export default App;
