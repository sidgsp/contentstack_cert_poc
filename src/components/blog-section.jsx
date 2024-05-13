import React from "react";

function BlogSection({ data, tags, highlightTop, bg }) {

  let background = bg ? "blog-gb-gray": ""

  return (
    <div className={`blog-slice ${background}`}>
      <div className="blog-overview-container">
        <div className="blog-overview">
          <div className="overview-description">
            { highlightTop &&
              <div className="highlight">
                <div className="highlight-border" dangerouslySetInnerHTML={{__html: data.highlight}}>
                  {/* <h2 className="highlight-title">Who is the Client</h2>
                  <div className="highlight-content">
                    <b>A US-based brokerage firm that provides investing and trading services to 11M client accounts, and own more than $1 trillion of assets.</b>
                  </div> */}
                </div>
              </div>
            }

            <h2 className="overview-title">{data.heading}</h2>

            <div className="overview-details" dangerouslySetInnerHTML={{__html: data.text}}>

            </div>
          </div>

          { !highlightTop &&
              <div className="highlight">
                <div className="highlight-border" dangerouslySetInnerHTML={{__html: data.highlight}}>
                  {/* <h2 className="highlight-title">Who is the Client</h2>
                  <div className="highlight-content">
                    <b>A US-based brokerage firm that provides investing and trading services to 11M client accounts, and own more than $1 trillion of assets.</b>
                  </div> */}
                </div>
              </div>
            }

          { tags &&
            <div className="section-meta">
              <div className="section-meta-container">
                <div className="section-tag">
                  <div>
                    <div className="tag-overview">
                      <div className="tag-container">
                        { data.blog_tags.map((tag) => (
                          <div className="tag-wrapper" key={tag}>
                            <button className="tag">{tag}</button>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default BlogSection;