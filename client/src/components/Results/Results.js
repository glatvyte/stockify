import "./Results.css";
import CompanyCard from "../CompanyCard/CompanyCard";
import StockChart from "../StockChart/StockChart";

//Company carde susigaudyt nuleistuos duomenis per propsus ir panaudoti tuos propsus JSX'e, kuri stilizuota pasiimsi is semantic ui

const Results = ({ companyList, onCompanySelect, stockCandles }) => {
  const renderCompanyList = companyList.map((company, i) => {
    const renderChart = () => {
      if (stockCandles) {
        return <StockChart stockCandles={stockCandles} />;
      }
    };
    return (
      <div className="results">
        <CompanyCard
          key={i}
          onCompanySelect={onCompanySelect}
          company={company}
        />
        {renderChart}
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderCompanyList}</div>;
};

export default Results;
