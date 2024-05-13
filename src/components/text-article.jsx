import React from "react";

function TextArticle({ data }) {

  return (
    <div className="heading-wrapper">
      <div className="heading-container">
        <h2 className="sub-heading">{data.heading}</h2>
        <div className="para-style" dangerouslySetInnerHTML={{__html: data.text}}>

        </div>
      </div>
    </div>
  );
}

export default TextArticle;