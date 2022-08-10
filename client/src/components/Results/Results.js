import "./Results.css";
import CompanyCard from "../CompanyCard/CompanyCard";
import StockChart from "../StockChart/StockChart";

//Company carde susigaudyt nuleistuos duomenis per propsus ir panaudoti tuos propsus JSX'e, kuri stilizuota pasiimsi is semantic ui

const Results = ({ companyList, onCompanySelect }) => {
  const renderCompanyList = companyList.map((company, i) => {
    return (
      <CompanyCard
        key={i}
        onCompanySelect={onCompanySelect}
        company={company}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderCompanyList}</div>;
};

export default Results;
