import React from "react";

function TileArticle({ data }) {

  return (
    <div className="offerings-container">
      <div className="offerings-heading">
        <div className="offerings-heading-style">
          <h2 className="header-products"></h2>
          <h2 className="sub-header-products">{data.heading}</h2>
          <p className="description-products" dangerouslySetInnerHTML={{__html: data.text}}></p>
        </div>
      </div>
      <div>
        <div className="product-cards-container">
          <div className="parent-container">
            { data.tiles.map((tile) => (
              <div className="tile-container" key={tile._metadata.uid}>
                <div className="tile-card">
                  <i className="tile-icon"></i>
                  <h3 className="tile-heading">{tile.heading}</h3>
                  <p className="tile-description">{tile.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileArticle;