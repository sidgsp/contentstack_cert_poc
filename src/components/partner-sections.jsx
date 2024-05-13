import React from "react";

function PartnerSection({ data }) {

  return (
    <div className="partner-section">
      <h6 className="partner-section-title">{data.heading}</h6>
      <div className="logo-section">
        { data.partners.map((partner) => (
          <a href={partner.partner_link.href} key={partner.partner_link.href}>
            <div className="logo-container">
              <img src={partner.partner_logo.url} alt="adobe" className="partner-logo" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PartnerSection;