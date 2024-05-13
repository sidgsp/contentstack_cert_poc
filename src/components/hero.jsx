import React from "react";

function Hero({ data, page_type }) {
  console.log(data)
  return (
    <div className="slider-img">
      <div className="slide-window">
        <div>
          <div className="slider-image-height">
            <div className={`${page_type} sliderImageHeight banner-background-image ${data.image.uid}`}></div>
            <div className="image-overlay">
              <div className="slider-media-overlay">
                <div className="carousel-label-wrapper">
                  <h6 className="carousel-label">{data.subheading}</h6>
                </div>
                <h1 className="slider-image-descriptions">{data.heading}</h1>
                <div className="carousel-description-outer-wrapper">
                  <div className="carousel-description-inner-wrapper">
                    <div className="carousel-description">
                      {data.text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <img src="https://www.gspann.com/static/966613a7c61a266c254d8a2430011e76/b0751/Zg0pgMt2UUcvBWnR_Desktop-1440X500-11-.webp" alt="hero" />   */}
export default Hero;