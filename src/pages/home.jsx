import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { useLivePreviewCtx } from "../context/live-preview-context-provider";
import { getCertPage } from "../helper";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import TextArticle from "../components/text-article";
import TileArticle from "../components/tile-article";
import PartnerSection from "../components/partner-sections";
import Merchandise from "../components/merch";
import BlogCarousel from "../components/blog-carousel";

export default function Home() {
  const [page, setPage] = useState();

  const lpTs = useLivePreviewCtx();

  const params = useParams();
  const entryUrl = params.page ? `/${params.page}` : "/";

  async function fetchPage() {
    try {
      const response = await getCertPage(entryUrl);
      console.log(response);

      setPage({...response});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPage();
  }, [lpTs]);

  if (!page) {
    return <p>loading ...</p>
  }

  return (
    <div className="index-page">
      <Header data={page.navbar} />
      <main className="main">
        <div className="slice-container">
          { page.sections.map((section, idx) => {
            switch (Object.keys(section)[0]) {
              case "hero":
                return <Hero data={section.hero} page_type={"home"} key={idx} />
              case "text_article":
                return <TextArticle data={section.text_article} key={idx} />
              case "tile_article":
                return <TileArticle data={section.tile_article} key={idx} />
              case "partners":
                return <PartnerSection data={section.partners} key={idx} />
              case "merchandise":
                return <Merchandise data={section.merchandise} key={idx} />
              case "blogs":
                return <BlogCarousel data={section.blogs} key={idx} /> 
              default:
            }
          })}
        </div>
      </main>
      <Footer data={page.footer} />
    </div>
  );
}
