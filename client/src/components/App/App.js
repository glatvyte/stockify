import { useEffect, useState } from "react";
import { format, addHours } from "date-fns";
import axios from "axios";
import toastr from "toastr";
import Filter from "../Filter/Filter";
import Results from "../Results/Results";
import StockChart from "../StockChart/StockChart";
import Strings from "../../utils/strings";
import mockedCompanyData from "../../utils/mockData";
import isEmptyObject from "../../utils/helpers";
import finnhubClient from "../../finnhub-api/finnhub";

import "./App.scss";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [companyList, setCompanyList] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState({});
  const [dateFrom, setDateFrom] = useState(
    Math.floor((Date.now() - 7 * 24 * 60 * 60 * 1000) / 1000)
  );
  const [dateTo, setDateTo] = useState(Math.floor(Date.now() / 1000));
  const [stockCandles, setStockCandles] = useState({});
  const [loading, setLoading] = useState(false);

  const search = () => {
    if (inputValue) {
      setLoading(true);
      finnhubClient.companyProfile2({ symbol: inputValue }, (error, data) => {
        if (error) {
          toastr.error(Strings.apiFailure);
        }
        setLoading(false);
        typeof data === Array ? setCompanyList(data) : setCompanyList([data]);
      });
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
    if (!isEmptyObject(company)) {
      setSelectedCompany(company);
      finnhubClient.stockCandles(
        company.ticker,
        "D",
        dateFrom,
        dateTo,
        (error, data, response) => {
          if (error) {
            toastr.error(Strings.apiFailure);
          }
          if (data.s !== "no_data") {
            selectedCompanyLogger(company, data);
            setStockCandles(data);
          }
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
      if (
        format(data.value[0], "t") != dateFrom &&
        format(data.value[1], "t") != dateTo
      ) {
        setDateFrom(format(addHours(data.value[0], 4), "t"));
        setDateTo(format(addHours(data.value[1], 4), "t"));
      }
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

  return (
    <div className="App">
      <Filter onInputValueChange={setInputValue} loading={loading} />
      <Results
        companyList={companyList}
        onCompanySelect={onCompanySelect}
        term={inputValue}
      />
      {renderStockChart()}
      <button onClick={showMockData} className="ui button teal">
        Mock Data
      </button>
    </div>
  );
};

export default App;
