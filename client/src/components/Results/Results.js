import "./Results.css";
import CompanyCard from "../CompanyCard/CompanyCard";
import StockChart from "../StockChart/StockChart";

//Company carde susigaudyt nuleistuos duomenis per propsus ir panaudoti tuos propsus JSX'e, kuri stilizuota pasiimsi is semantic ui

const Results = ({ companyList, onCompanySelect, stockCandles }) => {
  const renderCompanyList = companyList.map((company, i) => {
    return (
      <CompanyCard
        key={i}
        onCompanySelect={onCompanySelect}
        company={company}
      />
    );
  });

  const renderStockChart = () => {
    console.log(stockCandles, "stockCandles");
    if (!!Object.keys(stockCandles).length) {
      return <StockChart stockCandles={stockCandles} />;
    }
  };

  return (
    <div className="results">
      <div className="ui relaxed divided list">{renderCompanyList}</div>
      {renderStockChart()}
    </div>
  );
};

export default Results;
