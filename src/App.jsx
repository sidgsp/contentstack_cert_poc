import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./cs_components/layout";
import Home from "./pages/index";
import Blog from "./pages/blog";
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
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import CategoryBanner from "./components/category-banner";
import SubBanner from "./components/sub-banner";
import Carousel from "./components/carousel";
import TileArray from "./components/tile-array";

function App() {
  const [page, setPage] = useState();

  async function fetchPage() {
    try {
      const response = await getPOCPage();
      console.log(response);

      setPage({...response});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPage();
  }, []);

  if (!page) {
    return <p>loading ...</p>
  }

  return (
    <div className="pt_storefront">
      <Header />
      <main>
        <div className="html-slot-container">
          <Hero data={page.sections[0]} />
          <CategoryBanner data={page.sections[1]} />
          <SubBanner data={page.sections[2]} />
          <Carousel data={page.sections[3]} />
          <TileArray data={page.sections[4]} />
          <Carousel data={page.sections[5]} />
          <TileArray data={page.sections[6]} />
          <Carousel data={page.sections[7]} />
          <TileArray data={page.sections[8]} />
          <Carousel data={page.sections[9]} />
          <SubBanner data={page.sections[10]} />
          <SubBanner data={page.sections[11]} />
          <Carousel data={page.sections[12]} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

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
