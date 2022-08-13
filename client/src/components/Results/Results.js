import CompanyCard from "../CompanyCard/CompanyCard";
import isEmptyObject from "../../utils/helpers";
import Strings from "../../utils/strings";
import "./Results.css";

const Results = ({ companyList, onCompanySelect, term }) => {
  const renderCompanyList = companyList.map((company, i) => {
    return (
      // card className added
      <div key={i} className="card">
        <CompanyCard onCompanySelect={onCompanySelect} company={company} />
      </div>
    );
  });

  if (companyList.length > 0 && isEmptyObject(companyList[0])) {
    return (
      <div class="no-results">{`We couldn't find any results for "${term}".`}</div>
    );
  } else {
    return (
      <div className="ui relaxed divided list card-list">
        {renderCompanyList}
      </div>
    );
  }
};

export default Results;
