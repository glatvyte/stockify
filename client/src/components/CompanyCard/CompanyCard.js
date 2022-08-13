import "./CompanyCard.scss";

const CompanyCard = ({ onCompanySelect, company }) => {
  return (
    <div className="ui stackable cards">
      <div className="ui fluid card">
        <div className="content">
          <a onClick={() => onCompanySelect(company)} className="header">
            {company.name}
          </a>
          <div className="description left aligned">
            <p>
              Country: {company.country}
              <br />
              Currency: {company.currency}
              <br />
              Web Url:
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={company.weburl}
              >
                {company.weburl}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
