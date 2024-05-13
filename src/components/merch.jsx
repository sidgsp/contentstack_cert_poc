import React from "react";

function Merchandise({ data }) {

  return (
    <div className="merch-section-wrapper">
      <div className="merch-section-container">
        <div className="merch-section">
          <h2 className="merch-section-heading">{data.heading}</h2>
          
          { data.product.map((product) => (
            <div className="product" key={product.product_label}>
              <div className="product-image-container">
                <img src={product.product_image.url} alt="product" className="product-image" />
              </div>
              <div className="product-body">
                <h3 className="product-title">{product.product_label}</h3>
                <br />
                <br />
                <h4 className="product-price"><s>{product.price_custom_app.originalPrice}</s></h4>
                <h4 className="product-price">{product.price_custom_app.markdownPrice}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Merchandise;
