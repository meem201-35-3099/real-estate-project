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
             // className="max-padd-container bg-buyers bg-cover 
             // bg-no-repeat min-h-[800px] relative w-[100%]"
            >
              {}
              <div
                // className="absolute top-1/2 transform -translate-y-1/2 
               // left-20 h-auto w-[300px] p-[50px] px-[30px] text-left bg-black/50"
              >
                
              </div>
            </div>

            {/* detailes-section starts here */}
            <div className="left-50 mt-10 px-10">
              <div>
              </div>
              <br />
              <div>
                <h3>
                  <strong>The Northern Virginia Area</strong>
                </h3>
                <p className="w-[50%] bg-white mb-10 ">
                The NOVA is home to the state’s top rated schools/universities, and is located one hour from the D.C., the 
                nation's capital and 3 hours from the Virginia beach. The Pentagon, the headquarters of the U.S. Department of Defense and 
                the world's second-largest office, is located in Arlington County in Northern Virginia. 
                Northern Virginia also houses theseveral large companies, including several major aerospace manufacturing,
                consulting firms, and defense industry, which serve it and other components of the U.S. federal government.
                </p>
              </div>
              <br />
              <div>
                <h3>
                  <strong>Buying Process</strong>
                </h3>
                <p className="w-[50%] bg-white mb-10 ">
                Best Home Realty will set up a search for the you based on what you’re looking for in a new home. 
                Sign up to receive an email the minute a house that meets your criteria hits the market. 
                Once the buyer’s information is loaded into the search engine,you will receive an email within 
                minutes of the house being entered into the Multiple Listing Service database.
                </p>
              </div>
              <div className="w-[70%] bg-white">
                <h3>
                  <strong>
                    As your buyer’s agent, Best Home Realty will:
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
                    <li>Help you find the property that fits your needs</li>
                    <li>Recommend lenders that can pre-qualify you for the mortgage loan that best fits your needs</li>
                    <li>Arrange showings on houses you like</li>
                    <li>Prepare a competitive market analysis to help determine the property’s fair market value</li>
                    <li>Prepare and submit offers and negotiate the best possible deal</li>
                    <li>Help arrange Inspections and negotiate necessary repairs with the seller</li>
                    <li>Set up the final walkthrough of the property</li>
                    <li>Accompany the buyer at the closing</li>
                    <li>Your absolute satisfaction is our priority, and we will be there for every phase of the buying process.</li>
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
      <ContactSection />
    </main>
  );
};

export default Buyers;
