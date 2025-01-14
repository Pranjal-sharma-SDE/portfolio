import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import BlogArchive from "./page/BlogArchive";
import MouseTracker from "./components/MouseTracker";
import PageNotFound from "./components/PageNotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <> 
    <div className="cursor-pointer">
      <Header />
      {/* <MouseTracker/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blog" element={<BlogArchive />} /> */}
        <Route path="*" element={<PageNotFound />} /> 

      </Routes>

      <Footer />
      </div>
    </>
  );
}

export default App;
