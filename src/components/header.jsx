import React from "react";

function Header ({ data }) {

  return (
    <div className="navigation-container-parent">
      <nav className="navigation-container">
        <div className="header-bar">
          <a href={data.logo_link.href} className="navbar-brand">
            <img src={data.logo.url} alt={data.logo_link.title} className="navigation-brand-image" />
          </a>
        </div>

        <div className="navbar-collapse">
          <ul className="navbar-nav">
            {/* <li className="left-nav-section">
              <ul className="list-partition">
              </ul>
            </li> */}
            <li className="right-nav-section">
              <ul className="list-partition">
                { data.nav_links.map((link) => (
                  <li className="nav-item" key={link.link.title}>
                    <a href={link.link.href} className="left-nav-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;