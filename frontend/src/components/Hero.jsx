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
                Best Home Realty offers the new business model for selling
                Real Estate
              </h1>
              <p
                className="my-10 max-w-[33rem] mt-4 text-xl
                text-white text-justify"
              >
                With the advances in technology, sellers no longer have to pay
                higher commission rates to sell their homes. Buyers now search for
                their homes on the internet, and the low cost of advertising
                homes online has made lower commission rates possible. It’s a
                new era in Real Estate, with new commission rates for sellers!
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
