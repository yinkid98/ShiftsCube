import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Blog1 from "./Pages/Blog1";

import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Pages/loading";
import Services1 from "./Pages/services1";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer)
  }, [])

  if(loading){
    return <Loading/>
  }

    return (
    <Router>
      <Navbar />
      <Routes>
        {/* ✅ Default route to show Home when server starts */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/services1" element={<Services1/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}


export default App