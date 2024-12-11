import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sellers from "./pages/Sellers";
import Buyers from "./pages/Buyers";
import FAQ from "./pages/FAQ";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import AddProperty from "./pages/AddProperty";
import Bookings from "./pages/Bookings";
import Favourites from "./pages/Favourites";

import Header from "./components/header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
