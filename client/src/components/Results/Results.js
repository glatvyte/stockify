import "./Results.css";
import CompanyCard from "../CompanyCard/CompanyCard";

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
