import React from "react";
import { Link } from "react-router-dom";
import SellersDiscount from "../components/SellersDiscount";
import ContactSection from "../components/ContactSection";

const Sellers = () => {
  return (
    <main>
      <section className="bg-primary">
        <div className="max-padd-container pt-[99px] w-[100%]">
          <div className="bg-white">
            <div
              className="max-padd-container bg-sellers bg-cover 
              bg-no-repeat min-h-[800px] relative w-[100%]"
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 
          left-20 h-auto w-[300px] p-[50px] px-[30px] text-left bg-black/50"
              >
                <h1 className="text-white text-3xl font-bold">SELLERS</h1>
                <p
                  className="my-10 max-w-[33rem] mt-4 text-xl 
        text-white"
                >
                  Best Home Realty offers the new business model for selling
                  Real Estate.
                </p>
                {/* button */}
                <div>
                  <Link
                    to={"/buyers"}
                    className="inline-flex items-center justify-center gap-4 
              bg-secondary w-[200px] p-2 text-lg border-none rounded 
              uppercase text-white transition duration-500 
              hover:bg-tertiary mt-2"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SellersDiscount />
      <ContactSection />
    </main>
  );
};

export default Sellers;
