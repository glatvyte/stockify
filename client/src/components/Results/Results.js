import "./Results.css";
import CompanyCard from "../CompanyCard/CompanyCard";

//Company carde susigaudyt nuleistuos duomenis per propsus ir panaudoti tuos propsus JSX'e, kuri stilizuota pasiimsi is semantic ui

const Results = ({ companyList, onCompanySelect }) => {
  const renderCompanyList = companyList.map((company, i) => {
    return (
      // card className added
      <div key={i} className="card">
        <CompanyCard onCompanySelect={onCompanySelect} company={company} />
      </div>
    );
  });

  return (
    <div className="ui relaxed divided list card-list">{renderCompanyList}</div>
  );
};

export default Results;
