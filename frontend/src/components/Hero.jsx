import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-primary">
      <div className="max-padd-container pt-[99px] w-full">
        <div className="bg-white">
          {/* Banner Section */}
          <div
            className=" max-padd-container bg-home bg-cover
              bg-no-repeat min-h-[700px] w-[100%] relative"
          >
            <div
              className="banner-content absolute top-1/2 transform -translate-y-1/2
                left-20 h-[550px] w-[500px] p-[50px] px-[30px] text-left bg-black/50"
            >
              <h1 className="text-white text-3xl font-bold">
                Landmark Realty Group offers the new business model for selling
                Real Estate
              </h1>
              <p
                className="my-10 max-w-[33rem] mt-4 text-xl
                text-white text-justify"
              >
                With the advances in technology, sellers no longer have to pay
                6% commission rates to sell their homes. Buyers now search for
                their homes on the internet, and the low cost of advertising
                homes online has made lower commission rates possible. It’s a
                new era in Real Estate, with new commission rates for sellers!
                Why give your money away paying high commission rates?
              </p>
              {/* button */}
              <div>
                <Link
                  to={"/buyers"}
                  className="inline-flex items-center justify-center gap-4
                  bg-secondary w-[160px] p-2 text-lg border-none rounded
                  uppercase text-white transition duration-500
                  hover:bg-tertiary mt-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="flexCenter">
            <p className="w-[1200px] text-center my-14">
              Landmark Realty Group was formed in 2013 by Bill Sewell. With over
              30 years of residential real estate experience, we bring
              professional service that you can trust and depend on. SRG offers
              seller’s a chance not to pay high, outdated commission rates.
              EFFICIENCY AND TECHNOLOGY mean lower fees. Buyers and Sellers now
              have unlimited access to property listings and other information
              that was once guarded by the big real estate firms. SRG is a
              progressive RE firm that embraces the new world of real estate. We
              offer two plans to fit your needs and save you money!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
