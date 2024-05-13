import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useLivePreviewCtx } from "../context/live-preview-context-provider";
import { getCertPage, getBlogPage } from "../helper";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import BlogSection from "../components/blog-section";

export default function Blog() {
  const [layout, setLayout] = useState();
  const [page, setPage] = useState();

  const lpTs = useLivePreviewCtx();

  const params = useParams();
  const entryUrl = `/blog/${params.blogId}`;

  async function fetchLayout() {
    try {
      const response = await getCertPage("/");
      // console.log(response);

      setLayout({...response});
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPage() {
    try {
      const response = await getBlogPage(entryUrl);
      // console.log(response);

      setPage({...response});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchLayout();
    fetchPage();
  }, [lpTs]);

  if (!layout || !page) {
    return <p>loading ...</p>
  }

  return (
    <div className="index-page">
      <Header data={layout.navbar} />
      <main className="main">
        <div className="slice-container">
          <Hero data={page.banner} page_type={"blog"} />
          { page.blog_section.map((section, idx) => (
            <BlogSection data={section} tags={idx === 0} highlightTop={idx === 0} key={idx} bg={idx % 2 !== 0} />
          ))}
        </div>
      </main>
      <Footer data={layout.footer} />
    </div>
  );
}
