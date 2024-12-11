import React from "react";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <main>
      <section className="bg-primary">
        <div className="max-padd-container pt-[99px] w-[100%]">
          <div className="bg-white">
            {/* banner-section stats here */}
            <div
              className="max-padd-container bg-contact bg-cover 
              bg-no-repeat min-h-[800px] relative w-[100%]"
            >
              <div
                className="absolute top-1/2 transform -translate-y-1/2 
                left-20 h-auto w-[300px] p-[50px] px-[30px] text-left bg-black/50"
              >
                <h1 className="text-white text-3xl font-bold">CONTACT US</h1>
                <p
                  className="my-10 max-w-[33rem] mt-4 text-xl 
                text-white"
                >
                  Landmark Realty Group offers the new business model for
                  selling Real Estate.
                </p>
                {/* button */}
                <div>
                  <Link
                    to={"/contact"}
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

            {/* detailes-section starts here */}
            <div className="left-50 mt-10 px-10">
              <div>
                <p className="w-[60%] bg-white mb-10 ">
                  We would love to talk with you about your property or help you
                  find your perfect home. Give us a call, send an email or
                  contact us on our social media day or night.
                </p>
              </div>
              <br />
              <div>
                <ul className="text-secondary">
                  <li>
                    <span className="text-black font-bold">Bill:</span>{" "}
                    919.961.3765 Bill@sewellrealtygroup.com
                  </li>
                  <br />
                  <li>
                    <span className="text-black font-bold">Christian:</span>{" "}
                    919.794.1051 Christian@sewellrealtygroup.com
                  </li>
                  <br />
                  <li>
                    <span className="text-black font-bold">Jessalyn:</span>{" "}
                    917.484.0185 Jessalyn@sewellrealtygroup.com
                  </li>
                  <br />
                  <li>
                    <span className="text-black font-bold">Larry:</span>{" "}
                    919.274.1151 LarryO.srg@gmail.com
                  </li>
                  <br />
                  <li>
                    <span className="text-black font-bold">Lauren:</span>{" "}
                    919.819.6295 Lauren@SewellRealtyGroup.com
                  </li>
                  <br />
                  <li>
                    <span className="text-black font-bold">Tom:</span>{" "}
                    919.612.3584 Tom@sewellrealtygroup.com
                  </li>
                  <br />
                </ul>
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
                  Save Money and Sell Your House Today With Our Help.
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

export default Contact;
