import React from "react";

function BlogCarousel({ data }) {

  return (
    <div className="blog-carousel-wrapper">
      <div className="blog-container">
        <h2 className="blog-carousel-heading">{data.heading}</h2>
        <div className="blog-slider">
          {/* <div className="blog-list"> */}
            <div className="blog-track">
              { data.blog.map((blog) => (
                <div data-index="1" className="blog-slide" key={blog.uid}>
                  <div>
                    <div className="card-wrapper">
                      <div className="card-container">
                        <a href={blog.url}>
                          <div className="card-image-wrapper">
                            <img src={blog.banner.image.url} alt="blog" className="card-img" />
                          </div>
  
                          <div className="card-content-wrapper">
                            <div className="card-heading-wrapper">
                              <p className="card-heading">{blog.title}</p>
                            </div>
                            <div className="tag-container">
                              { blog.blog_section[0].blog_tags.map((tag) => (
                                <div className="tag-wrapper" key={tag}>
                                  <button className="tag">{tag}</button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default BlogCarousel;
