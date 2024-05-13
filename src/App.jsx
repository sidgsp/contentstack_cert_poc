import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./cs_components/layout";
// import Home from "./pages/index";
// import Blog from "./pages/blog";
import BlogPost from "./pages/blog-post";
import Error from "./pages/error";
import "./styles/third-party.css";
import "./styles/style.css";
import "./styles/modal.css";
import "@contentstack/live-preview-utils/dist/main.css";
import "react-loading-skeleton/dist/skeleton.css";
import { EntryProps } from "./typescript/components";
import { POCPage } from "./typescript/pages";
import { getPOCPage } from "./helper";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import TextArticle from "./components/text-article";
import TileArticle from "./components/tile-article";
import PartnerSection from "./components/partner-sections";
import Merchandise from "./components/merch";
import BlogCarousel from "./components/blog-carousel";
import BlogSection from "./components/blog-section";
import { useLivePreviewCtx } from "./context/live-preview-context-provider";



function App() {
  const [page, setPage] = useState();

  const lpTs = useLivePreviewCtx();

  async function fetchPage() {
    try {
      const response = await getPOCPage();
      // console.log(response);

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
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="/:page" element={<Home entry={getPageRes} />} /> */}
          <Route path="/blog" />
          <Route
            path="/blog/:blogId"
            element={<Blog />}
          />
          {/* <Route path="/404" element={<Error />}></Route>
          <Route path="*" element={<Error />}></Route> */}
        </Route>
      </Routes>
    </div>
  );

  // home
  // return (
  //   <div className="index-page">
  //     <Header />
  //     <main className="main">
  //       <div className="slice-container">
  //         <Hero page_type={"home"} />
  //         <TextArticle />
  //         <TileArticle />
  //         <PartnerSection />
  //         <TileArticle />
  //         <Merchandise />
  //         <BlogCarousel /> 
  //       </div>
  //     </main>
  //     <Footer />
  //   </div>
  // );
  // return (
  //   <div className="index-page">
  //     <Header />
  //     <main className="main">
  //       <div className="slice-container">
  //         <Hero page_type={"blog"} />
  //         <BlogSection tags highlightTop />
  //         <BlogSection />
  //       </div>
  //     </main>
  //     <Footer />
  //   </div>
  // );

  // return (
  //   <div className="pt_storefront">
  //     <Header />
  //     <main>
  //       <div className="html-slot-container">
  //         { page.sections.map((section) => {
  //           switch (section._content_type_uid) {
  //             case "hero":
  //               return <Hero data={section} />
  //             case "category_banner":
  //               return <CategoryBanner data={section} />
  //             case "sub_banner":
  //               return <SubBanner data={section} />
  //             case "carousel":
  //               return <Carousel data={section} />
  //             case "tile_array":
  //               return <TileArray data={section} />
  //             default:
  //           }
  //         })}
  //       </div>
  //     </main>
  //     <Footer />
  //   </div>
  // );
}

// cs-academy-siddharth-1711395038-c4c9c.vercel.app
// function App() {
//   const [getEntry, setEntry] = useState({} as EntryProps );

//   function getPageRes(response: EntryProps) {
//     setEntry(response);
//   }

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Layout entry={getEntry} />}>
//           <Route index element={<Home entry={getPageRes} />} />
//           <Route path="/:page" element={<Home entry={getPageRes} />} />
//           <Route path="/blog" element={<Blog entry={getPageRes} />} />
//           <Route
//             path="/blog/:blogId"
//             element={<BlogPost entry={getPageRes} />}
//           />
//           <Route path="/404" element={<Error />}></Route>
//           <Route path="*" element={<Error />}></Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// }

export default App;
