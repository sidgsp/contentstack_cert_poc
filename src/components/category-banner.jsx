import React from "react";

function CategoryBanner({ data }) {
  return (
    <div className="desktopLinks">
      <div className="subCatLinks">
        <ul>
          { data.categories.map((category) => (
            <li key={category.uid}>
              <a href={category.cta_link}>{category.cta_label}</a>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}
  
export default CategoryBanner;
