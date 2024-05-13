import React from "react";

function Footer ({ data }) {

  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-item-wrapper">
          <div className="footer-logo-wrapper">
            <div className="footer-logo">
              <img src={data.logo.url} width="130" height="30" alt="GSPANN Logo" />
            </div>
          </div>

          <div className="footer-links-wrapper">
            { data.columns.map((column, idx) => (
              <div className={idx === 0 || idx === data.columns.length - 1 ? "footer-end-links" : "footer-links"} key={column.heading}>
                <ul>
                  <li className="footer-heading">{column.heading}</li>
                  { column.nav_links.map((link) => (
                    <li key={link.link.title}>
                      <a href={link.link.href} className="footer-link">{link.label}</a>
                    </li>
                  ))}
                </ul>
                  {idx === data.columns.length - 1 &&
                    <div className="socials-container">
                      <div className="socials">
                        { data.socials.map((social) => (
                          <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.title}>
                            <i className={`socials-icon fab fa-${social.title.toLowerCase()}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  }
              </div>
            ))}
          </div>

          <div className="footer-legal-wrapper">
            <div className="footer-legal">
              { data.legal_links.map((link, idx) => (
                <span key={link.link.title}>
                  { idx !== 0 &&
                    <span className="footer-legal-divider">|</span>
                  }
                  <a href={link.link.href} className="footer-legal-link">{link.label}</a>
                  
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Footer;