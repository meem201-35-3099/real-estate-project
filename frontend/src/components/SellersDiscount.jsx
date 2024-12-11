import React from "react";
// import "./SellersDiscount.css";

function SellersDiscount() {
  return (
    <section className="bg-primary">
      <div className="container sellers-discount">
        <div className="flexCenter w-[100%]">
          <h1 className="title w-[100%] mt-10">
            We Offer Two Programs For Sellers. Limited Service and Traditional
            Full Service. Choose whichever is best for you!
          </h1>
        </div>
        <div className="programs text-center mt-5 mb-10">
          <div className="program bg-white">
            <h3>Limited Service Listing</h3>
            <hr />
            <p className="commission text-secondary">
              2.90% PAYABLE AT CLOSING
            </p>
            <hr />
            <ul>
              <li>SELLER NEGOTIATES OFFERS</li>
              <li>Home listed on MLS with up to 30 photos</li>
              <li>Home featured on Zillow, Trulia, REALTOR.com</li>
              <li>Home featured on Local Real Estate Company websites</li>
              <li>All NC required Contracts, Disclosures and Addendums</li>
              <li>Centralized Showing Service and Feedback</li>
              <li>Combo Lock Box</li>
              <li>Professional Sign</li>
              <li>Professional Quality Photographs</li>
            </ul>
            <p className="note">
              2.9% Commission (2.2% to Buyer’s Agent/0.7% to SRG)
            </p>
            <button className="btn">SIGN UP</button>
          </div>
          <div className="program bg-white mt-5">
            <h3>Traditional Full Service Listing</h3>
            <hr />
            <p className="commission text-secondary">
              3.75% PAYABLE AT CLOSING
            </p>
            <hr />
            <ul>
              <li>FULL REPRESENTATION in contract negotiations</li>
              <li>Home listed on MLS with up to 30 photos</li>
              <li>Home featured on Zillow, Trulia, REALTOR.com</li>
              <li>Home featured on Local Real Estate Company websites</li>
              <li>All NC required Contracts, Disclosures and Addendums</li>
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
              3.75% Commission (2.2% to Buyer’s Agent/1.55% to SRG)
            </p>
            <button className="btn">SIGN UP</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellersDiscount;
