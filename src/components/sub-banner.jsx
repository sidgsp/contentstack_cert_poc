import React from "react";

function SubBanner({ data }) {
  return (
    // data-cslp="page.bltb8e926a0b920a427.en-us.page_components.1.section.image.url"
    <div className="sub-banner" {...data.$.title}>
      <a className="product-banner" href={data.cta_link} data-category="hero banner 3" data-action="Learn More" data-label="Extended Returns">
        <picture>
          {/* <source media="(min-width: 56.250em)" srcSet="https://www.londondrugs.com/on/demandware.static/-/Sites/default/dwf14e99c3/images/slot/sub_banners/ExtendedReturns2023_Holiday_PDP1232x80.png" />
          <source media="(min-width: 25em)" srcSet="https://www.londondrugs.com/on/demandware.static/-/Sites/default/dwe96a2993/images/slot/sub_banners/ExtendedReturns2023_Holiday_PDP_700x80.png" /> */}
          <img alt="Extended Returns" src={data.image.url} /> 
        </picture>
      </a>
    </div>
  );
}
  
export default SubBanner;
