import "./CompanyCard.css";

const CompanyCard = ({ onCompanySelect, company }) => {
  return (
    <div onClick={() => onCompanySelect(company)} className="ui card">
      <div className="content">
        <div className="header">{company.name}</div>
        <div className="description">
          <p>
            Country: {company.country}
            <br />
            Currency: {company.currency}
            <br />
            Web Url: {company.weburl}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
