import React from "react";

import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import SellersDiscount from "../components/SellersDiscount";

const Home = () => {
  return (
    <main>
      <Hero />
      <SellersDiscount />
      <ContactSection />
    </main>
  );
};

export default Home;
