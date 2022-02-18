import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./component/Home/HomePage";
import About from "./component/About/About";
import NavbarHome from "./component/Navbar/Navbar";
import OurTeams from "./component/OurTeams/OurTeams";
import HowItIsWorks from "./component/HowIt'sWorks/HowItIsWorks";
import Pricing from "./component/Pricing/Pricing";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/footer";

ReactDOM.render(
  <BrowserRouter>
    <NavbarHome />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourteams" element={<OurTeams />} />
      <Route path="/howitisworks" element={<HowItIsWorks />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
