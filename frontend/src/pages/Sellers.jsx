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
                  Sewell Realty Group offers the new business model for selling
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
      <div className="bg-secondary h-auto mb-[.5px]">
        <div>
          <div className="row">
            <div className="col-lg-8">
              <div className="flexCenter mt-2">
                <h3 className="text-white text-[25px]">
                  Save Money and Sell Your House Today With Our Help.
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="flexCenter mt-2">
                <button className="btn-secondary btn-secondary-outline btn-outline-white uppercase rounded">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </main>
  );
};

export default Sellers;
