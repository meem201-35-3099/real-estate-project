import React from "react";
// import "./SellersDiscount.css";

function SellersDiscount() {
  return (
    <section className="bg-primary">
      <div className="container sellers-discount">
        <div className="flexCenter w-[100%]">
          <h1 className="title w-[100%] mt-10">
            We provide a complete suite of services to ensure your home sells
            quickly and at the best price. Choose whichever is best for you!
          </h1>
        </div>
        <div className="programs text-center mt-5 mb-10">
          <div className="program bg-white">
            <hr />
            <p className="commission text-secondary">Limited Service Listing</p>
            <hr />
            <ul>
              <li>SELLER NEGOTIATES OFFERS</li>
              <li>Home listed on MLS with up to 30 photos</li>
              <li>Home featured on Zillow, Trulia, REALTOR.com</li>
              <li>Home featured on Local Real Estate Company websites</li>
              <li>All VA required Contracts, Disclosures and Addendums</li>
              <li>Centralized Showing Service and Feedback</li>
              <li>Combo Lock Box</li>
              <li>Professional Sign</li>
              <li>Professional Quality Photographs</li>
            </ul>
            <p className="note">
              1% Commission to BHR + Buyer's agent commission (negotiable)
            </p>
          </div>
          <div className="program bg-white mt-5">
            <hr />
            <p className="commission text-secondary">
              Full Service Listing
            </p>
            <hr />
            <ul>
              <li>FULL REPRESENTATION in contract negotiations</li>
              <li>Home listed on MLS with up to 75 photos</li>
              <li>Home featured on Zillow, Trulia, REALTOR.com</li>
              <li>Home featured on Local Real Estate Company websites</li>
              <li>All VA required Contracts, Disclosures and Addendums</li>
              <li>Centralized Showing Service and Feedback</li>
              <li>Combo Lock Box</li>
              <li>Professional Sign</li>
              <li>Professional Quality Photographs</li>
              <li>Professional Measurements</li>
              <li>Market Analysis to help determine list price</li>
              <li>Printable Listing Flyers</li>
              <li>Review Offers and negotiate the best possible terms</li>
              <li>Review Inspection Reports</li>
              <li>Provide information to closing attorney</li>
              <li>Review Closing Settlement</li>
              <li>NO upfront fee required</li>
            </ul>
            <p className="note">
              2% commission to BHR + Buyer's agent commission (negotiable)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellersDiscount;
