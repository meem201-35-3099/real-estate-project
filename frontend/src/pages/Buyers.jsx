import React from "react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

const Buyers = () => {
  return (
    <main>
      <section className="bg-primary">
        <div className="max-padd-container pt-[99px] w-[100%]">
          <div className="bg-white">
            {/* banner-section stats here */}
            <div
              className="max-padd-container bg-buyers bg-cover 
              bg-no-repeat min-h-[800px] relative w-[100%]"
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 
                left-20 h-auto w-[300px] p-[50px] px-[30px] text-left bg-black/50"
              >
                <h1 className="text-white text-3xl font-bold">BUYERS</h1>
                <p
                  className="my-10 max-w-[33rem] mt-4 text-xl 
                text-white"
                >
                  With over 27 years of real estate experience, we bring
                  professional service that you can trust and depend on.
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
                    Contact us
                  </Link>
                </div>
              </div>
            </div>

            {/* detailes-section starts here */}
            <div className="left-30 mt-10 px-10">
              <div>
                <p className="w-[70%] bg-white mb-10 ">
                  Best Home Realty was formed in 2023 by Imrul Hasan. With
                  over 2 years of residential real estate experience, we bring
                  professional service that you can trust and depend on. BHR
                  offers seller’s a chance not to pay high, outdated commission
                  rates. EFFICIENCY AND TECHNOLOGY mean lower fees. Buyers and
                  Sellers now have unlimited access to property listings and
                  other information that was once guarded by the big real estate
                  firms. BHR is a progressive RE firm that embraces the new
                  world of real estate. We offer two plans to fit your needs and
                  save you money!
                </p>
              </div>
              <br />
              <div>
                <h3>
                  <strong>The Triangle Area</strong>
                </h3>
                <p className="w-[70%] bg-white mb-10 ">
                  Landmark Realty Group was formed in 2013 by Bill Sewell. With
                  over 30 years of residential real estate experience, we bring
                  professional service that you can trust and depend on. SRG
                  offers seller’s a chance not to pay high, outdated commission
                  rates. EFFICIENCY AND TECHNOLOGY mean lower fees. Buyers and
                  Sellers now have unlimited access to property listings and
                  other information that was once guarded by the big real estate
                  firms. SRG is a progressive RE firm that embraces the new
                  world of real estate. We offer two plans to fit your needs and
                  save you money!
                </p>
              </div>
              <br />
              <div>
                <h3>
                  <strong>Buying Process</strong>
                </h3>
                <p className="w-[70%] bg-white mb-10 ">
                  Landmark Realty Group was formed in 2013 by Bill Sewell. With
                  over 30 years of residential real estate experience, we bring
                  professional service that you can trust and depend on. SRG
                  offers seller’s a chance not to pay high, outdated commission
                  rates. EFFICIENCY AND TECHNOLOGY mean lower fees. Buyers and
                  Sellers now have unlimited access to property listings and
                  other information that was once guarded by the big real estate
                  firms. SRG is a progressive RE firm that embraces the new
                  world of real estate. We offer two plans to fit your needs and
                  save you money!
                </p>
              </div>
              <div className="w-[70%] bg-white">
                <h3>
                  <strong>
                    As your buyer’s agent, Sewell Realty Group will:
                  </strong>
                </h3>
                <br />
                <div>
                  <ul
                    style={{
                      listStyleType: "circle",
                      listStylePosition: "inside",
                      paddingLeft: "40px",
                    }}
                  >
                    <li>SELLER NEGOTIATES OFFERS</li>
                    <li>Home listed on MLS with up to 30 photos</li>
                    <li>Home featured on Zillow, Trulia, REALTOR.com</li>
                    <li>Home featured on Local Real Estate Company websites</li>
                    <li>
                      All NC required Contracts, Disclosures and Addendums
                    </li>
                    <li>Centralized Showing Service and Feedback</li>
                    <li>Combo Lock Box</li>
                    <li>Professional Sign</li>
                    <li>Professional Quality Photographs</li>
                  </ul>
                </div>
                <br />
                <p className="mb-10">
                  Your absolute satisfaction is our priority, and we will be
                  there for every phase of the buying process.
                </p>
              </div>
              <p className="h-5 w-[100%] bg-white"></p>
            </div>
          </div>

          {/* map-section */}
          <div></div>
        </div>
      </section>

      <div className="bg-secondary h-auto mb-[.5px]">
        <div>
          <div className="row">
            <div className="col-lg-8">
              <div className="flexCenter mt-2">
                <h3 className="text-white text-[25px]">
                  Let Us Help You Find The Property You’re Looking For.
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="flexCenter mt-2">
                <button className="btn-secondary btn-secondary-outline btn-outline-white uppercase rounded">
                  Contact us
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

export default Buyers;
