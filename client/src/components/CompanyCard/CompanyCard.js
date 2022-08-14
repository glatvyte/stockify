import Strings from "../../utils/strings";
import "./CompanyCard.scss";

const CompanyCard = ({ onCompanySelect, company }) => {
  return (
    <div className="ui stackable cards">
      <div className="ui fluid card">
        <div
          className="ui icon"
          data-tooltip={Strings.tooltipText}
          data-position="bottom center"
        >
          <i className="grey info icon link"></i>
        </div>
        <div className="ui centered tiny image">
          <img
            alt="company logo"
            src={company.logo ? company.logo : "../../images/no-image-icon.jpg"}
          />
        </div>
        <div className="content">
          <a onClick={() => onCompanySelect(company)} className="header">
            {company.name}
          </a>
          <div className="description left aligned">
            <span className="prop-text">Country: </span>
            {company.country}
            <br />
            <span className="prop-text">Currency: </span>
            {company.currency}
            <br />
            <span className="prop-text">Web Url:</span>
            <a target="_blank" rel="noopener noreferrer" href={company.weburl}>
              {company.weburl}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
